/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types'
import { useEffect, useRef, useState } from 'react'
import { KEYS_MAP } from '../js/keys'
import styles from '../js/styles'

function OperationButton ({ id, style, dispatch, operation, action }) {
  const ref = useRef(null)
  const [clicked, setClicked] = useState(false)

  useEffect(() => {
    const button = ref.current

    const handleChange = (event) => {
      event.stopPropagation()

      if (event.key === KEYS_MAP[operation] || event.type === 'click') {
        event.preventDefault()

        dispatch({ type: action, payload: { operation } })

        setClicked(true)
        setTimeout(() => setClicked(false), 150)

        console.log(
          `{Operation: ${operation}, Event: ${event.type}, Key: ${
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

OperationButton.propTypes = {
  id: PropTypes.string,
  dispatch: PropTypes.func.isRequired,
  operation: PropTypes.string.isRequired,
  action: PropTypes.string.isRequired,
  style: PropTypes.object.isRequired
}

OperationButton.defaultProps = {
  action: '',
  style: styles.default_operand
}

export default OperationButton
