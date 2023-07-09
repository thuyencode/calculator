import HelpButton from './navBar/HelpButton'
import LinkButton from './navBar/LinkButton'

const NavBar = () => {
  return (
    <nav className='fixed top-0 z-10 w-full'>
      <div className='container flex justify-between relative p-2 sm:px-0 text-base sm:mx-auto sm:text-lg'>
        <HelpButton />
        <LinkButton />
      </div>
    </nav>
  )
}

export default NavBar
