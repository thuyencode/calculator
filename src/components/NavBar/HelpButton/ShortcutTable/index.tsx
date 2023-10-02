import { KEYS_MAP } from '@/utils/keys'
import Kbd from './Kbd'

const ShortcutTable = () => {
  const keys = Object.keys(KEYS_MAP)

  return (
    <section className='font-body absolute top-full z-20 mr-2 border-2 border-gray-950 bg-white p-2'>
      <ul className='grid grid-cols-2 gap-x-4 gap-y-2 sm:grid-cols-3'>
        {keys.map((key) => {
          const kbd: string = KEYS_MAP[key]

          return (
            <li
              className='inline-flex w-36 items-center justify-between sm:w-32'
              key={key}
            >
              <Kbd keyboardInput={kbd} />{' '}
              <span className='font-semibold'>{key}</span>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default ShortcutTable
