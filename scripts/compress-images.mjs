/**
 * compress-images.mjs
 * Compresses all JPG/PNG/WebP images in a given folder (recursively).
 * Outputs WebP files alongside originals.
 *
 * Usage:
 *   node scripts/compress-images.mjs <folder>                   # compress folder
 *   node scripts/compress-images.mjs public/gallery             # default gallery folder
 *   node scripts/compress-images.mjs C:\Photos\wedding          # absolute path
 *   node scripts/compress-images.mjs <folder> --quality 75      # custom quality (1–100)
 *   node scripts/compress-images.mjs <folder> --replace         # overwrite originals with WebP
 *
 *   pnpm compress <folder>
 *   pnpm compress public/gallery/pre-wedding --quality 85
 */

import sharp from 'sharp'
import { readdir, stat, rename } from 'fs/promises'
import { join, extname, basename, dirname, resolve, isAbsolute } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const SUPPORTED = new Set(['.jpg', '.jpeg', '.png', '.webp'])

// Parse CLI args: first non-flag arg is the folder
const args = process.argv.slice(2)
const qualityFlag = args.indexOf('--quality')
const QUALITY = qualityFlag !== -1 ? parseInt(args[qualityFlag + 1], 10) : 80
const REPLACE = args.includes('--replace')

// Folder: first positional argument (not a flag or flag value)
const flagValues = new Set(qualityFlag !== -1 ? [args[qualityFlag + 1]] : [])
const positional = args.filter((a, i) => !a.startsWith('--') && !flagValues.has(a))
const folderArg = positional[0]

let GALLERY_DIR
if (!folderArg) {
  GALLERY_DIR = join(__dirname, '..', 'public', 'gallery')
} else if (isAbsolute(folderArg)) {
  GALLERY_DIR = folderArg
} else {
  // Resolve relative to cwd (where user runs the command from)
  GALLERY_DIR = resolve(process.cwd(), folderArg)
}

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const files = []
  for (const entry of entries) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) {
      files.push(...(await walk(full)))
    } else if (SUPPORTED.has(extname(entry.name).toLowerCase())) {
      files.push(full)
    }
  }
  return files
}

async function compress(file) {
  const ext = extname(file).toLowerCase()
  const base = basename(file, ext)
  const dir = dirname(file)
  const outPath = join(dir, `${base}.webp`)

  // Skip files that are already the output target and not being overwritten
  if (file === outPath) return { file, skipped: true }

  const { size: before } = await stat(file)

  await sharp(file)
    .webp({ quality: QUALITY })
    .toFile(outPath)

  const { size: after } = await stat(outPath)
  const saving = (((before - after) / before) * 100).toFixed(1)

  if (REPLACE && ext !== '.webp') {
    // Replace original with the new webp (rename webp to original path)
    await rename(outPath, file.replace(ext, '.webp'))
  }

  return { file, before, after, saving }
}

async function main() {
  console.log(`\nCompressing images in: ${GALLERY_DIR}`)
  console.log(`Quality: ${QUALITY}  Replace originals: ${REPLACE}\n`)

  let files
  try {
    files = await walk(GALLERY_DIR)
  } catch {
    console.error(`Directory not found: ${GALLERY_DIR}`)
    console.error('Create public/gallery/ and add images first.')
    process.exit(1)
  }

  if (files.length === 0) {
    console.log('No images found.')
    return
  }

  let totalBefore = 0, totalAfter = 0

  for (const file of files) {
    const rel = file.replace(GALLERY_DIR + '\\', '').replace(GALLERY_DIR + '/', '')
    try {
      const result = await compress(file)
      if (result.skipped) {
        console.log(`  skip  ${rel}`)
      } else {
        totalBefore += result.before
        totalAfter  += result.after
        const kb = n => (n / 1024).toFixed(0).padStart(6)
        console.log(`  ✓  ${rel.padEnd(40)} ${kb(result.before)} KB → ${kb(result.after)} KB  (${result.saving}% smaller)`)
      }
    } catch (err) {
      console.error(`  ✗  ${rel}: ${err.message}`)
    }
  }

  if (totalBefore > 0) {
    const pct = (((totalBefore - totalAfter) / totalBefore) * 100).toFixed(1)
    const mb = n => (n / 1024 / 1024).toFixed(2)
    console.log(`\nTotal: ${mb(totalBefore)} MB → ${mb(totalAfter)} MB  (${pct}% smaller)\n`)
  }
}

main()
