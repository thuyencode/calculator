/* eslint-disable @typescript-eslint/no-explicit-any */
import { Action } from '@/types/action'
import { Operation } from '@/types/operation'
import { KEYS_MAP } from '@/utils/keys'
import styles from '@/utils/styles'
import { Dispatch, useEffect, useRef, useState } from 'react'

type OperationButtonProps = {
  id: string
  style?: { notClicked: string; clicked: string }
  dispatch: Dispatch<Action>
  operation: Operation
  action: any
}

function OperationButton({
  id,
  style = styles.default_operand,
  dispatch,
  operation,
  action = '',
}: OperationButtonProps) {
  const ref = useRef<HTMLButtonElement | null>(null)
  const [clicked, setClicked] = useState(false)

  useEffect(() => {
    const button = ref.current

    if (button == null) return

    const handleMouseEvent = (event: MouseEvent) => {
      event.stopPropagation()

      dispatch({ type: action, operation })

      setClicked(true)
      setTimeout(() => setClicked(false), 150)

      console.log(`{Operation: ${operation}, Event: ${event.type}`)
    }

    const handleKeyboardEvent = (event: KeyboardEvent) => {
      event.stopPropagation()

      if (event.key === KEYS_MAP[operation]) {
        event.preventDefault()

        dispatch({ type: action, operation })

        setClicked(true)
        setTimeout(() => setClicked(false), 150)

        console.log(
          `{Operation: ${operation}, Event: ${event.type}, Key: ${
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
  }, [action, dispatch, operation])

  return (
    <button
      id={id}
      className={clicked ? style.clicked : style.notClicked}
      ref={ref}
    >
      {operation}
    </button>
  )
}

export default OperationButton
