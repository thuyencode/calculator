import HelpButton from './HelpButton'
import LinkButton from './LinkButton'

const NavBar = () => {
  return (
    <nav className='fixed top-0 z-10 w-full'>
      <div className='container relative flex justify-between p-2 text-base sm:mx-auto sm:px-0 sm:text-lg'>
        <HelpButton />
        <LinkButton />
      </div>
    </nav>
  )
}

export default NavBar
