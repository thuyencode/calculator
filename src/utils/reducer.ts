import { Action } from '@/types/action'
import { State } from '@/types/state'
import evaluate from './evaluate'

export const initValue: State = {
  overwrite: undefined,
  previous: undefined,
  operation: undefined,
  current: '0',
}

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'add-digit':
      if (action.digit === '.' && state.current == undefined) {
        return state
      }

      if (state.overwrite) {
        return {
          ...state,
          current: action.digit,
          overwrite: false,
        }
      }

      if (action.digit === '0' && state.current === '0') {
        return state
      }

      if (action.digit === '.' && state.current?.includes('.')) {
        return state
      }

      return {
        ...state,
        current: `${state.current || ''}${action.digit}`,
      }

    case 'choose-operation':
      if (state.previous == undefined) {
        return {
          ...state,
          previous: state.current || '0',
          operation: action.operation,
          current: undefined,
        }
      }

      if (state.current == undefined) {
        if (action.operation === '-') {
          return {
            ...state,
            current: `${action.operation}${'0'}`,
          }
        }

        return {
          ...state,
          operation: action.operation,
        }
      }

      if (action.operation === '+' && state.current.includes('-')) {
        return {
          ...state,
          previous: state.previous,
          operation: action.operation,
          current: state.current.replace('-', ''),
        }
      }

      return {
        ...state,
        previous: evaluate(state),
        operation: action.operation,
        current: undefined,
      }

    case 'clear':
      return initValue

    case 'delete-digit':
      if (state.overwrite) {
        return {
          ...state,
          overwrite: false,
          current: undefined,
        }
      }

      if (state.current == undefined) return state

      if (state.current.length === 1) {
        return { ...state, current: undefined }
      }

      return {
        ...state,
        current: state.current.slice(0, -1),
      }

    case 'evaluate':
      if (
        state.operation == undefined ||
        state.current == undefined ||
        state.previous == undefined
      ) {
        return state
      }

      return {
        ...state,
        overwrite: true,
        previous: undefined,
        operation: undefined,
        current: evaluate(state),
      }

    default:
      return state
  }
}
