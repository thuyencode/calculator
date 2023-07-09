import { useReducer } from 'react'
import DigitButton from './components/DigitButton'
import Display from './components/Display'
import NavBar from './components/NavBar'
import OperationButton from './components/OperationButton'
import './index.css'
import { ACTIONS } from './js/actions'
import formatOperand from './js/formatOperand'
import reducer from './js/reducer'
import styles from './js/styles'

const App = () => {
  const [{ current = '0', previous, operation }, dispatch] = useReducer(
    reducer,
    {}
  )

  return (
    <>
      <NavBar />
      <div className='z-0 flex h-screen items-center justify-center font-body text-lg sm:text-xl'>
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
            action={ACTIONS.ADD_DIGIT}
          />

          <DigitButton
            id='eight'
            digit='8'
            dispatch={dispatch}
            action={ACTIONS.ADD_DIGIT}
          />

          <DigitButton
            id='nine'
            digit='9'
            dispatch={dispatch}
            action={ACTIONS.ADD_DIGIT}
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
            action={ACTIONS.ADD_DIGIT}
          />

          <DigitButton
            id='five'
            digit='5'
            dispatch={dispatch}
            action={ACTIONS.ADD_DIGIT}
          />

          <DigitButton
            id='six'
            digit='6'
            dispatch={dispatch}
            action={ACTIONS.ADD_DIGIT}
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
            action={ACTIONS.ADD_DIGIT}
          />

          <DigitButton
            id='two'
            digit='2'
            dispatch={dispatch}
            action={ACTIONS.ADD_DIGIT}
          />

          <DigitButton
            id='three'
            digit='3'
            dispatch={dispatch}
            action={ACTIONS.ADD_DIGIT}
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
            action={ACTIONS.ADD_DIGIT}
          />

          <DigitButton
            id='decimal'
            digit='.'
            dispatch={dispatch}
            action={ACTIONS.ADD_DIGIT}
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
