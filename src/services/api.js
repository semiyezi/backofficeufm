import axios from 'axios';
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("token")}`;
export default axios.create({
  
  baseURL:`https://us-central1-urbainfm-bd5e6.cloudfunctions.net/api/`
  // baseURL: `https://cartographievbg.herokuapp.com/api/`
  // baseURL: `http://localhost:5000/api/` 
});