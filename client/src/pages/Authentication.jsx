import React, { useState } from 'react'
import axios from "axios";
import { useCookies } from "react-cookie"
import {useNavigate} from "react-router-dom"

const Authentication = () => {
  return (
    <div className='auth'>
      <Login />
      <Register />
    </div>
  )
}

const Login = () => {
  const [username, setusername] = useState("")
  const [password, setpassword] = useState("")
  const [,setCookies] = useCookies(["access_token"])
  const navigate =  useNavigate();
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("https://recipe-mern-nine.vercel.app/auth/login", { username, password });

      setCookies("access_token",response.data.token);
      window.localStorage.setItem("UserID",response.data.userID);

      navigate("/");
      alert('Loged In Successfully')
    } catch (err) {
      console.error(err)
    }
  }
  return (
    <Form
      username={username}
      setusername={setusername}
      password={password}
      setpassword={setpassword}
      Label="Login"
      onSubmit={onSubmit}
    />
  )
}


const Register = () => {

  const [username, setusername] = useState("")
  const [password, setpassword] = useState("")
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("https://recipe-mern-nine.vercel.app/auth/register", { username, password });
      alert("Registeration Done! Now Login.")
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Form
      username={username}
      setusername={setusername}
      password={password}
      setpassword={setpassword}
      Label="Register"
      onSubmit={onSubmit}
    />
  )
}

const Form = (props) => {

  return (
    <div className='auth-container'>
      <form onSubmit={props.onSubmit}>
        <h2>{props.Label}</h2>
        <div className='form-group'>
          <label htmlFor='username'>username: </label>
          <input
            type="text"
            id="username"
            onChange={(e) => { props.setusername(e.target.value) }}
            value={props.username}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>password: </label>
          <input
            type="password"
            id="password"
            onChange={(e) => { props.setpassword(e.target.value) }}
            value={props.password}
          />
        </div>

        <button type="submit">{props.Label}</button>
      </form>
    </div>
  )

}



export default Authentication