/**
 * Created by Gohma on 04/06/2017.
 */
import Axios from 'axios';

const urlNewsLocal = "http://localhost:8000/api/news/"
const urlNewsMIM = "http://94.23.63.76:8000/api/news/"
const urlNewsMIMSource = "http://94.23.63.76:8000/api/news/sources/"


export const getNewsSource = () => Axios.get(urlNewsMIMSource)
export const getNews = () => Axios.get(urlNewsMIM)

