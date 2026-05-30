import { wedding } from '../config/wedding'
import './GiftBox.css'

function GiftCard({ person, info }) {
  return (
    <div className="gift__card">
      <p className="gift__card-label">Mừng cưới đến {person}</p>
      <div className="gift__card-body">
        {info.qrImage && (
          <div className="gift__qr">
            <img src={info.qrImage} alt={`QR ${info.name}`} />
          </div>
        )}
        {!info.qrImage && (
          <div className="gift__qr gift__qr--placeholder">
            <span>QR</span>
          </div>
        )}
        <div className="gift__info">
          <p className="gift__bank">{info.bank}</p>
          <p className="gift__name">{info.name}</p>
          <p className="gift__account">{info.account}</p>
        </div>
      </div>
    </div>
  )
}

export default function GiftBox() {
  return (
    <section className="gift">
      <div className="section-wrap">
        <div className="section-header">
          <h2>Hộp mừng cưới</h2>
          <p className="section-ornament">✦</p>
          <p className="gift__note">{wedding.gift.note}</p>
        </div>

        <div className="gift__cards">
          <GiftCard person="chú rể" info={wedding.gift.groom} />
          <GiftCard person="cô dâu" info={wedding.gift.bride} />
        </div>
      </div>
    </section>
  )
}
