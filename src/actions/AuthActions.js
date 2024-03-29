import axios from "axios";
import cookies from "react-cookies";
import base64 from "base-64";
import { Login_Success, Logout } from "../redux/counterSlicer";
import swal from "sweetalert";

export const login = (payload, dispatch) => {
    payload.preventDefault();
    const { email, password } = payload.target;
    const encoded = base64.encode(`${email.value}:${password.value}`);
    try {
      axios
        .post(
          `${process.env.REACT_APP_BACKEND}/signin`,
          {},
          {
            headers: {
              Authorization: `Basic ${encoded}`,
            },
          }
        )
        .then(async(res) => {
          cookies.save("token", res.data.token);
          cookies.save("name", res.data.name);
          cookies.save("email", res.data.email);
          cookies.save("username", res.data.username);
          cookies.save("capabilities", JSON.stringify(res.data.capabilities));
          cookies.save("userInfo", JSON.stringify(res.data));
          getProfile( dispatch);
        })
        .catch((err) =>swal("Somthing went wrong!"));
    } catch (err) {
      swal(err);
    }
  };

export const signupAction = (payload, dispatch) => {
    try {
      axios
        .post(`${process.env.REACT_APP_BACKEND}/${payload.role}/signup`, payload,{   
          headers: { "Content-Type": "multipart/form-data" } 
          
  })  

        .then((res) => {  
          swal({
            title:"welcome on our website", 
            icon: "success",
            buttons: {
              cancel: "Ok",
            },
          });
            cookies.save("token", res.data.token);
            cookies.save("name", res.data.name);
            cookies.save("capabilities", JSON.stringify(res.data.capabilities));
            cookies.save("userInfo", JSON.stringify(res.data));
            console.log("res.data", res.data);
          dispatch(Login_Success(res.data));
        
        })
        .catch((e) => swal("Username or email already taken!"));
    } catch (e) {
    //   dispatch(FAILED_SIGNUP ());
    // swal("Somthing went wrong!")
    }
  };


export const logoutHandler = (dispatch) => {
    cookies.remove("userInfo");
    cookies.remove("token");
    cookies.remove("capabilities");
    cookies.remove("name");
    cookies.remove("username");
    cookies.remove("email");
    dispatch(Logout());
  };
  
  export const getProfile = async (dispatch) => {
    try {
      const data = cookies.load("userInfo");

    await axios.get(`${process.env.REACT_APP_BACKEND}/${data.role}/${data.id}`,{
      headers: {
        Authorization: `Bearer ${cookies.load("token")}`,
      },
    }).then((res) => {
      dispatch(Login_Success(res.data));
    });
    } catch (e) {
      console.error(e);
    }
  };




export const editProfile = async(payload, dispatch, userInfo) => {
  payload.preventDefault();
  console.log(payload)
  const { name, username, email, password, phoneNumber, city } = payload.target;
  let obj = {
    name: name.value || userInfo.name,
    username: username.value || userInfo.username,
    email: email.value || userInfo.email,
    // password: password.value ,
    phoneNumber: phoneNumber.value || userInfo.phoneNumber,
    // customerAddress: city.value
    };
    
    console.log("obj", obj);
  // const encoded = base64.encode(`${email.value}:${password.value}`);
  // console.log("payload", payload);

  try {
   await axios
      .put(
        `${process.env.REACT_APP_BACKEND}/${userInfo.role}/${userInfo.id}`,
        obj,
        {
          headers: {
            Authorization: `Bearer ${cookies.load("token")}`,
          },
        }
      )
      .then(async(res) => {
        console.log("res.data", res.data);
        cookies.save("token", res.data.token);
        cookies.save("name", res.data.name);
        cookies.save("capabilities", JSON.stringify(res.data.capabilities));
        cookies.save("userInfo", JSON.stringify(res.data));
        getProfile( dispatch);
        swal({
          title:"your profile has been updated",
          icon: "success",
          buttons: {
            cancel: "Ok",
          },
        });
      })
      .catch((err) => swal("Somthing went wrong!"));
  } catch (err) {
    swal("Somthing went wrong!");
  }
};




export const deleteLocation = (dispatch, userInfo) => {
    let newArr = [...userInfo.customerAddress];
    console.log("obj", newArr);
  // const encoded = base64.encode(`${email.value}:${password.value}`);
  // console.log("payload", payload);
  try {
    axios
      .put(
        `${process.env.REACT_APP_BACKEND}/${userInfo.role}/${userInfo.id}`,
        {customerAddress: newArr},
        {
          headers: {
            Authorization: `Bearer ${cookies.load("token")}`,
          },
        }
      )
      .then(async(res) => {
        console.log("res.data", res.data);
        // cookies.save("token", res.data.token);
        // cookies.save("name", res.data.name);
        // cookies.save("capabilities", JSON.stringify(res.data.capabilities));
        // cookies.save("userInfo", JSON.stringify(res.data));
        getProfile( dispatch);
      })
      .catch((err) => swal("Somthing went wrong!"));
  } catch (err) {
    swal(err);
  }
};