import { AnyAction } from 'redux'
import {call, put} from 'redux-saga/effects'
import {  usersFetchedAction } from '../actions/users'
import { getUsers } from '../apis/users'
import { user } from '../modeles/users'

export function* getUsersSaga(action:AnyAction):Generator{
  const data=yield call(getUsers, action.payload)
  yield put(usersFetchedAction(data as user[]))
}
