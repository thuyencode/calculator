const evaluate = ({ current, previous, operation }) => {
  const prev = parseFloat(previous)
  const curr = parseFloat(current)

  if (isNaN(prev) || isNaN(curr)) return ''

  let computation = ''

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
