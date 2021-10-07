import Image from 'next/image'

export default function Header(props) {
  return (
    <header id="header">
        <a id="logo" href="/">
          <Image
            src="/logo.jpg"
            alt="Caleb Trachte Logo"
            width={248}
            height={248}
            className="headerLogo"
          />{' '}
        </a>
        <styles />
    </header>
  )
}
