import { Operation } from '@/types/operation'

type DisplayProps = {
  operation: Operation | undefined
  previous: string | undefined
  current: string | undefined
}

const Display = ({ operation, previous, current }: DisplayProps) => {
  return (
    <div
      className='font-display col-span-4 bg-blue-950 px-2 py-1 text-right'
      id='display'
    >
      <div className='flex h-1/2 items-center justify-end'>
        {previous} {operation}
      </div>
      <div className='flex h-1/2 items-center justify-end'>{current}</div>
    </div>
  )
}

export default Display
