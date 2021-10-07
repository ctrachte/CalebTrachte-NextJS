import Image from 'next/image'

export default function Header() {
  return (
    <header id="header">
      <a id="logo" href="/">
        <Image
          src="/logo.jpg"
          alt="Caleb Trachte Logo"
          width={240}
          height={240}
          className="headerLogo"
        />{' '}
      </a>
      <div className="headerTextContainer">
        <p class="headerText">
          PC and Video Game Nerd, Software Developer, Creator of Craft Hot
          Sauce, Platinum League of Legends Support, Airbnb SuperHost, Married,
          Reformed 1689. Learn more about me:
        </p>
      </div>
      <styles />
    </header>
  )
}
