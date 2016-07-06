
export function addCount(num) {
  return {
    type: 'ADD_REQUEST',
    payload: {
      num,
    },
  }
}
