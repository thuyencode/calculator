import { Operation } from './operation'

export type State = {
  overwrite: boolean | undefined
  previous: string | undefined
  operation: Operation | undefined
  current: string | undefined
}
