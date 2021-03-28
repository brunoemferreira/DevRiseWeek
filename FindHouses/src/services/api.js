import axios from 'axios';
import { API_URL, XRAPIDAPIKEY, XTAPIDAPIHOST } from 'react-native-dotenv';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'x-rapidapi-key': XRAPIDAPIKEY,
    'x-rapidapi-host': XTAPIDAPIHOST,
    useQueryString: true,
  },
});

export default api;
