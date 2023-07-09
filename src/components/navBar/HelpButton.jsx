import { useEffect, useRef, useState } from 'react'
import ShortcutTable from './helpButton/ShortcutTable'

const HelpButton = () => {
  const [clicked, setClicked] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const button = ref.current

    const handleClick = () => {
      setClicked(!clicked)
    }

    button.addEventListener('click', handleClick)

    return () => {
      button.removeEventListener('click', handleClick)
    }
  }, [clicked])

  return (
    <>
      <button
        className='inline-flex items-center border-2 border-gray-950 bg-blue-500 px-2 py-1 font-body text-white hover:bg-blue-600 active:bg-blue-700'
        ref={ref}
      >
        <i className='mr-[5px]'>
          {/* https://heroicons.com */}
          {!clicked && (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='h-5 w-5'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
              />
            </svg>
          )}
          {clicked && (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='h-5 w-5'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          )}
        </i>
        <span>Shortcuts</span>
      </button>
      {clicked && <ShortcutTable />}
    </>
  )
}

export default HelpButton
