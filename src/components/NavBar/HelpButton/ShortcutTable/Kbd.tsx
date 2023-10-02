const Kbd = ({ keyboardInput }: { keyboardInput: string }) => {
  return (
    <kbd className='border border-gray-950 bg-gray-100 px-2 py-1.5 font-mono text-xs font-semibold text-gray-800'>
      {keyboardInput}
    </kbd>
  )
}

export default Kbd
