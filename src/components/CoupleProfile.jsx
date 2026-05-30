import { wedding } from '../config/wedding'
import './CoupleProfile.css'

function Profile({ side, name, photo, bio, role }) {
  const isLeft = side === 'left'
  return (
    <div className={`profile profile--${side}`}>
      <div className="profile__photo-wrap">
        <img src={photo} alt={name} className="profile__photo" />
      </div>
      <div className={`profile__info profile__info--${isLeft ? 'right' : 'left'}`}>
        <p className="profile__role">{role}</p>
        <h3 className="profile__name">{name}</h3>
        <div className="profile__ornament">
          <span className="profile__ornament-line" />
          <span className="profile__ornament-heart">♥</span>
          <span className="profile__ornament-line" />
        </div>
        <p className="profile__bio">{bio}</p>
      </div>
    </div>
  )
}

export default function CoupleProfile() {
  return (
    <section className="couple-profile">
      <Profile
        side="left"
        name={wedding.groomName}
        photo={wedding.groomPhoto}
        bio={wedding.groomBio}
        role="THE GROOM"
      />
      <Profile
        side="right"
        name={wedding.brideName}
        photo={wedding.bridePhoto}
        bio={wedding.brideBio}
        role="THE BRIDE"
      />
    </section>
  )
}
