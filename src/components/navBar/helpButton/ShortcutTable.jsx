import { KEYS_MAP } from '../../../js/keys'
import Kbd from './shortcutTable/Kbd'

const ShortcutTable = () => {
  const keys = Object.keys(KEYS_MAP)

  return (
    <section className='absolute top-full z-20 mr-2 border-2 border-gray-950 bg-white p-2 font-body'>
      <ul className='grid grid-cols-2 gap-x-4 gap-y-2 sm:grid-cols-3'>
        {keys.map((key, index) => (
          <li
            key={index}
            className='inline-flex w-36 items-center justify-between sm:w-32'
          >
            <Kbd keyboardInput={KEYS_MAP[key]} />{' '}
            <span className='font-semibold'>{key}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default ShortcutTable
