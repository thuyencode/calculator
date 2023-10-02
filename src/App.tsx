import { useReducer } from 'react'
import DigitButton from './components/DigitButton'
import Display from './components/Display'
import NavBar from './components/NavBar'
import OperationButton from './components/OperationButton'
import './index.css'
import { ACTIONS } from './utils/actions'
import formatOperand from './utils/formatOperand'
import { initValue, reducer } from './utils/reducer'
import styles from './utils/styles'

const App = () => {
  const [state, dispatch] = useReducer(reducer, initValue)
  const { current, previous, operation } = state

  return (
    <>
      <NavBar />
      <div className='font-body z-0 flex h-screen items-center justify-center text-lg sm:text-xl'>
        <div className='grid h-[420px] w-[280px] grid-cols-4 grid-rows-6 gap-[2px] border-2 border-gray-950 bg-gray-950 text-white sm:h-[480px] sm:w-[320px]'>
          <Display
            operation={operation}
            previous={formatOperand(previous)}
            current={formatOperand(current)}
          />

          <OperationButton
            id='clear'
            style={styles.AC}
            operation='AC'
            dispatch={dispatch}
            action={ACTIONS.CLEAR}
          />

          <OperationButton
            id='delete'
            style={styles.DEL}
            operation='DEL'
            dispatch={dispatch}
            action={ACTIONS.DELETE_DIGIT}
          />

          <OperationButton
            id='divide'
            operation='/'
            dispatch={dispatch}
            action={ACTIONS.CHOOSE_OPERATION}
          />

          <DigitButton
            id='seven'
            digit='7'
            dispatch={dispatch}
          />

          <DigitButton
            id='eight'
            digit='8'
            dispatch={dispatch}
          />

          <DigitButton
            id='nine'
            digit='9'
            dispatch={dispatch}
          />

          <OperationButton
            id='multiply'
            operation='X'
            dispatch={dispatch}
            action={ACTIONS.CHOOSE_OPERATION}
          />

          <DigitButton
            id='four'
            digit='4'
            dispatch={dispatch}
          />

          <DigitButton
            id='five'
            digit='5'
            dispatch={dispatch}
          />

          <DigitButton
            id='six'
            digit='6'
            dispatch={dispatch}
          />

          <OperationButton
            id='subtract'
            operation='-'
            dispatch={dispatch}
            action={ACTIONS.CHOOSE_OPERATION}
          />

          <DigitButton
            id='one'
            digit='1'
            dispatch={dispatch}
          />

          <DigitButton
            id='two'
            digit='2'
            dispatch={dispatch}
          />

          <DigitButton
            id='three'
            digit='3'
            dispatch={dispatch}
          />

          <OperationButton
            id='add'
            operation='+'
            dispatch={dispatch}
            action={ACTIONS.CHOOSE_OPERATION}
          />

          <DigitButton
            id='zero'
            digit='0'
            dispatch={dispatch}
          />

          <DigitButton
            id='decimal'
            digit='.'
            dispatch={dispatch}
          />

          <OperationButton
            id='equals'
            style={styles.evaluate}
            operation='='
            dispatch={dispatch}
            action={ACTIONS.EVALUATE}
          />
        </div>
      </div>
    </>
  )
}

export default App
