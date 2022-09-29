import createSagaMiddleware from "redux-saga";
import { takeLatest } from "redux-saga/effects";
import { USERS_FETCH} from "../actions/users";
import { getUsersSaga } from "./users";

export const sagaMiddleware=createSagaMiddleware()

export function* rootSaga():Generator{
yield takeLatest(USERS_FETCH,getUsersSaga)
}