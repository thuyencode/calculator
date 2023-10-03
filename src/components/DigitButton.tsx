import { Action } from '@/types/action'
import { Digit } from '@/types/digit'
import { Dispatch, useEffect, useRef, useState } from 'react'
import { KEYS_MAP } from '../utils/keys'
import styles from '../utils/styles'

type DigitButtonProps = {
  id: string
  style?: { notClicked: string; clicked: string }
  dispatch: Dispatch<Action>
  digit: Digit
}

function DigitButton({
  id,
  style = styles.default_digit,
  dispatch,
  digit,
}: DigitButtonProps) {
  const ref = useRef<HTMLButtonElement | null>(null)
  const [clicked, setClicked] = useState(false)

  useEffect(() => {
    const button = ref.current

    if (button == null) return

    const handleMouseEvent = (event: MouseEvent) => {
      event.stopPropagation()

      dispatch({ type: 'add-digit', digit })

      setClicked(true)
      setTimeout(() => setClicked(false), 150)

      console.log(`{Digit: ${digit}, Event: ${event.type}`)
    }

    const handleKeyboardEvent = (event: KeyboardEvent) => {
      event.stopPropagation()

      if (event.key === KEYS_MAP[digit]) {
        event.preventDefault()

        dispatch({ type: 'add-digit', digit })

        setClicked(true)
        setTimeout(() => setClicked(false), 150)

        console.log(
          `{Digit: ${digit}, Event: ${event.type}, Key: ${
            event.key ? event.key : 'none'
          }}`
        )
      }
    }

    button.addEventListener('click', handleMouseEvent)
    document.addEventListener('keydown', handleKeyboardEvent)

    return () => {
      button.removeEventListener('click', handleMouseEvent)
      document.removeEventListener('keydown', handleKeyboardEvent)
    }
  }, [dispatch, digit])

  return (
    <button
      className={clicked ? style.clicked : style.notClicked}
      id={id}
      ref={ref}
    >
      {digit}
    </button>
  )
}

export default DigitButton
