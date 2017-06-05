/**
 * Created by Gohma on 05/06/2017.
 */
import {DO_SMTHING_REQUEST} from "../routes/News/modules/news";


const initialState = {
  data: "nonX"
}
export default function newsReduceur(state = initialState, action) {

  switch (action.type) {
    case DO_SMTHING_REQUEST :
      return {
        data: "lol"
      }
      break;
    default :
      return {
        data: "c non"
      }
  }
}
