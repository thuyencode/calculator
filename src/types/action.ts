import { Digit } from './digit'
import { Operation } from './operation'

export type Action =
  | {
      type: 'add-digit'
      digit: Digit
    }
  | {
      type: 'choose-operation'
      operation: Operation
    }
  | {
      type: 'clear'
    }
  | {
      type: 'delete-digit'
    }
  | {
      type: 'evaluate'
    }
  | {
      type: ''
    }
