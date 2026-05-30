import { wedding } from '../config/wedding'
import './LoveStory.css'

export default function LoveStory() {
  return (
    <section className="love-story">
      <div className="love-story__wrap">
        <div className="love-story__tag">Và.. Ngày ấy đã tới</div>

        <h2 className="love-story__title">
          {wedding.groomName}
          <span className="love-story__amp">&amp;</span>
          {wedding.brideName}
        </h2>

        <div className="love-story__ornament">
          <span className="love-story__ornament-line" />
          <span className="love-story__ornament-heart">♥</span>
          <span className="love-story__ornament-line" />
        </div>

        <p className="love-story__text">{wedding.loveStory}</p>

        <div className="love-story__parents">
          <div className="love-story__parent-group">
            <p className="love-story__parent-label">Con ông:</p>
            <p className="love-story__parent-name">{wedding.groomParents.father}</p>
            <p className="love-story__parent-label">Con bà:</p>
            <p className="love-story__parent-name">{wedding.groomParents.mother}</p>
            {wedding.groomParents.address && (
              <p className="love-story__parent-address">{wedding.groomParents.address}</p>
            )}
          </div>
          <div className="love-story__parent-divider">♥</div>
          <div className="love-story__parent-group">
            <p className="love-story__parent-label">Con ông:</p>
            <p className="love-story__parent-name">{wedding.brideParents.father}</p>
            <p className="love-story__parent-label">Con bà:</p>
            <p className="love-story__parent-name">{wedding.brideParents.mother}</p>
            {wedding.brideParents.address && (
              <p className="love-story__parent-address">{wedding.brideParents.address}</p>
            )}
          </div>
        </div>

        <p className="love-story__signature">
          {wedding.groomName} &amp; {wedding.brideName}
        </p>
      </div>
    </section>
  )
}
