/**
 * Created by Gohma on 04/06/2017.
 */
import {
  FETCH_NEWS_AGREGAT_REQUEST,
  FETCH_NEWS_REQUEST,
  FETCH_NEWS_SUCCES,
  FETCH_NEWS_AGREGAT_SUCCES
} from "../../../actions/index";


export function fetchNews(value) {
  return {
    type: FETCH_NEWS_REQUEST,
    payload: value
  }
}


export function fetchNewsAgregat(value) {
  return {
    type: FETCH_NEWS_AGREGAT_REQUEST,
    payload: value
  }
}

const initialState = {
  data: {},
  agregat: {}
}


export default function newsReduceur(state = initialState, action) {

  switch (action.type) {
    case FETCH_NEWS_SUCCES :
      return {
        data: action.data
      };
      break;
    case
      FETCH_NEWS_AGREGAT_SUCCES
    :
      return {
        agregat: action.data
      };
      break;
    default :
      return {}
  }
}
