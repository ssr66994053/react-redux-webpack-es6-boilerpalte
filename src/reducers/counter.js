function counter(state = {num: 0}, action) {
  console.log(action)
  let s = Object.assign({}, state)
  switch(action.type) {
    case 'ADD':
      s.num = state.num + action.payload.num
      return s
    default:
      return state
  }
}

export default counter
