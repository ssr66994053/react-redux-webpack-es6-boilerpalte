import { delay, takeEvery } from 'redux-saga'
import { take, put, fork } from 'redux-saga/effects'

function *addSaga(action) {
  yield delay(1000)
  yield put({type:'ADD', payload: action.payload})
}


export function *mySaga() {
  yield *takeEvery('ADD_REQUEST', addSaga)
}
