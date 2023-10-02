import { State } from '@/types/state'

const evaluate = (state: State) => {
  const { current, previous, operation } = state

  const prev = parseFloat(previous ?? '0')
  const curr = parseFloat(current ?? '0')

  if (isNaN(prev) || isNaN(curr)) return ''

  let computation = 0

  switch (operation) {
    case '+':
      computation = prev + curr
      break

    case '-':
      computation = prev - curr
      break

    case 'X':
      computation = prev * curr
      break

    case '/':
      computation = prev / curr
      break
  }

  return computation.toString()
}

export default evaluate
