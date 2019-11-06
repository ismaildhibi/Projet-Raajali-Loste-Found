import axios from 'axios'

//get
export const getinfos = () => dispatch => {
    axios.get("/info").then(res =>
      dispatch({
        type: "GET_INFOS",
        payload: res.data
      })
    );
  };
  
  //add
  export const addinfos = info => dispatch => {
    console.log(info)
    axios.post("/info", info).then(res => dispatch(getinfos()));
  };

 // delete
  export const deleteinfos = id => dispatch => {
    axios.delete(`/info/${id}`).then(res => dispatch(getinfos()));
  };
// update
  export const updateinfos = (id, info) => dispatch => {
    axios
      .put(`/info/${id}`, info)
      .then(res => dispatch(getinfos()));
  };