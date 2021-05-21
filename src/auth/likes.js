import { API } from "../backend"


export const addToList =(userid,token,data)=>{
    const c ={"like":data}
   
        
    console.log("here ",c )
    return fetch(`${API}/user/${userid}/addlikes`,{
        method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type":"application/json",
        Authorization: `Bearer ${token}`
      },
      body:  JSON.stringify(c)
    })
      .then(response => {
        console.log("sent")
        return response.json();
      })
      .catch(err => console.log(err));
};

export const getAllLikes = (user,token) => {
    return fetch(`${API}/user/${user}/getlikes`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        return response.json();
      })
      .catch(error => console.log(error));
  };