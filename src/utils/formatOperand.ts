const INTEGER_FORMATTER = new Intl.NumberFormat('en-us', {
  maximumFractionDigits: 0,
})

const formatOperand = (operand: string | undefined) => {
  if (operand == undefined) return

  const [integer, decimal] = operand.split('.')

  if (decimal == undefined) {
    return INTEGER_FORMATTER.format(+integer)
  }

  return `${INTEGER_FORMATTER.format(+integer)}.${decimal}`
}

export default formatOperand
