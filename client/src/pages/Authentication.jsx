import React, { useState } from 'react'

const Authentication = () => {
  return (
    <div className='auth'>
      <Login />
      <Register />
    </div>
  )
}

const Login = () => {
  const [Username, setUsername] = useState("")
  const [Password, setPassword] = useState("")

  return (
    <Form
      Username={Username}
      setUsername={setUsername}
      Password={Password}
      setPassword={setPassword}
      Label="Login"
    />
  )
}


const Register = () => {

  const [Username, setUsername] = useState("")
  const [Password, setPassword] = useState("")

  return (
    <Form
      Username={Username}
      setUsername={setUsername}
      Password={Password}
      setPassword={setPassword}
      Label="Register"
    />
  )
}

const Form = (props) => {

  return (
    <div className='auth-container'>
      <form>
        <h2>{props.Label}</h2>
        <div className='form-group'>
          <label htmlFor='username'>UserName: </label>
          <input
            type="text"
            id="username"
            onChange={(e) => { props.setUsername(e.target.value) }}
            value={props.Username}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password: </label>
          <input
            type="text"
            id="password"
            onChange={(e) => { props.setPassword(e.target.value) }}
            value={props.Password}
          />
        </div>

        <button type="submit">{props.Label}</button>
      </form>
    </div>
  )

}



export default Authentication