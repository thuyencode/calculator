/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types'
import { useEffect, useRef, useState } from 'react'
import { KEYS_MAP } from '../js/keys'
import styles from '../js/styles'

function DigitButton ({ id, style, dispatch, digit, action }) {
  const ref = useRef(null)
  const [clicked, setClicked] = useState(false)

  useEffect(() => {
    const button = ref.current

    const handleChange = (event) => {
      event.stopPropagation()

      if (event.key === KEYS_MAP[digit] || event.type === 'click') {
        event.preventDefault()

        dispatch({ type: action, payload: { digit } })

        setClicked(true)
        setTimeout(() => setClicked(false), 150)

        console.log(
          `{Digit: ${digit}, Event: ${event.type}, Key: ${
            event.key ? event.key : 'none'
          }}`
        )
      }
    }

    button.addEventListener('click', handleChange)
    document.addEventListener('keydown', handleChange)

    return () => {
      button.removeEventListener('click', handleChange)
      document.removeEventListener('keydown', handleChange)
    }
  }, [action, dispatch, digit])

  return (
    <button
      id={id}
      className={clicked ? style.clicked : style.notClicked}
      ref={ref}
    >
      {digit}
    </button>
  )
}

DigitButton.propTypes = {
  id: PropTypes.string,
  dispatch: PropTypes.func.isRequired,
  digit: PropTypes.string.isRequired,
  action: PropTypes.string.isRequired,
  style: PropTypes.object.isRequired
}

DigitButton.defaultProps = {
  action: '',
  style: styles.default_digit
}

export default DigitButton
