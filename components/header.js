import Image from 'next/image'

const Header = () => {
  return (
    <header id="header">
      <a id="logo" href="/">
        <Image
          src="/logo-removebg-preview.png"
          alt="Caleb Trachte Logo"
          width={500}
          height={500}
          className="headerLogo"
        />{' '}
      </a>
      <div className="headerTextContainer">
      </div>
      <styles />
    </header>
  )
}
export default Header;