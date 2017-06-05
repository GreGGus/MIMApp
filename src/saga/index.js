/**
 * Created by Gohma on 05/06/2017.
 */
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import {getNewsSource,getNews} from "../../services/api"
import * as Actions from "../actions/"


function* fetchNews(action) {
  try {
    const news = yield call(() => getNews());
    yield put({type: Actions.FETCH_NEWS_SUCCES, data: news.data});
  } catch (e) {
    yield put({type: Actions.FETCH_NEWS_FAIL, message: e.message});
  }
}

function* fetchNewsAgregat(action) {
  try {
    const news = yield call(() => getNewsSource());
    console.log("fetchNewsAgregat",news)
    yield put({type: Actions.FETCH_NEWS_AGREGAT_SUCCES, data: news.data});
  } catch (e) {
    yield put({type: Actions.FETCH_NEWS_AGREGAT_FAIL, message: e.message});
  }
}

function* mySaga() {
  yield takeLatest(Actions.FETCH_NEWS_REQUEST, fetchNews);


  yield takeLatest(Actions.FETCH_NEWS_AGREGAT_REQUEST, fetchNewsAgregat);

}

export default mySaga;
