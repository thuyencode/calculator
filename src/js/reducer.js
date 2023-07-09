import { ACTIONS } from './actions'
import evaluate from './evaluate'

const reducer = (state, { type, payload }) => {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      if (payload.digit === '.' && state.current == null) {
        return state
      }

      if (state.overwrite) {
        return {
          ...state,
          current: payload.digit,
          overwrite: false
        }
      }

      if (payload.digit === '0' && state.current === '0') {
        return state
      }

      if (payload.digit === '.' && state.current?.includes('.')) {
        return state
      }

      return {
        ...state,
        current: `${state.current || ''}${payload.digit}`
      }

    case ACTIONS.CHOOSE_OPERATION:
      if (state.previous == null) {
        return {
          ...state,
          previous: state.current || '0',
          operation: payload.operation,
          current: null
        }
      }

      if (state.current == null) {
        if (payload.operation === '-') {
          return {
            ...state,
            current: `${payload.operation}${'0'}`
          }
        }

        return {
          ...state,
          operation: payload.operation
        }
      }

      if (payload.operation === '+' && state.current.includes('-')) {
        return {
          ...state,
          previous: state.previous,
          operation: payload.operation,
          current: state.current.replace('-', '')
        }
      }

      return {
        ...state,
        previous: evaluate(state),
        operation: payload.operation,
        current: null
      }

    case ACTIONS.CLEAR:
      return {}

    case ACTIONS.DELETE_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          overwrite: false,
          current: null
        }
      }

      if (state.current == null) return state

      if (state.current.length === 1) {
        return { ...state, current: null }
      }

      return {
        ...state,
        current: state.current.slice(0, -1)
      }

    case ACTIONS.EVALUATE:
      if (
        state.operation == null ||
        state.current == null ||
        state.previous == null
      ) {
        return state
      }

      return {
        ...state,
        overwrite: true,
        previous: null,
        operation: null,
        current: evaluate(state)
      }

    default:
      return state
  }
}

export default reducer
