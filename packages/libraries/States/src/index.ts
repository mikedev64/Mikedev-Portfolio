export type StateListener<State> = (state: State, previousState: State) => void

export interface Store<State> {
  getState(): State
  setState(nextState: State | ((currentState: State) => State)): void
  subscribe(listener: StateListener<State>): () => void
}

export function createStore<State>(initialState: State): Store<State> {
  let state = initialState
  const listeners = new Set<StateListener<State>>()

  return {
    getState: () => state,
    setState: (nextState) => {
      const previousState = state
      state = typeof nextState === 'function'
        ? (nextState as (currentState: State) => State)(state)
        : nextState

      if (Object.is(previousState, state)) {
        return
      }

      listeners.forEach((listener) => listener(state, previousState))
    },
    subscribe: (listener) => {
      listeners.add(listener)
      return () => listeners.delete(listener)
    },
  }
}

export type StateMachineDefinition<State, Event extends string> = {
  initial: State
  transitions: Partial<Record<Event, (state: State) => State>>
}

export interface StateMachine<State, Event extends string> extends Store<State> {
  send(event: Event): void
}

export function createStateMachine<State, Event extends string>(
  definition: StateMachineDefinition<State, Event>,
): StateMachine<State, Event> {
  const store = createStore(definition.initial)

  return {
    ...store,
    send: (event) => {
      const transition = definition.transitions[event]
      if (transition) {
        store.setState(transition)
      }
    },
  }
}