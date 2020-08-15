import React, {useState} from "react";
import axios from 'axios';

const Login = (props) => {
  
  const [login, setLogin] = useState({
    username: '',
    password: ''
  })

  const handleChange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value
    })
    console.log("login", login)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/login', login)
    .then(res => {
      console.log("post response data", res);
      window.localStorage.setItem('token', res.data.payload)
    })
    props.history.push('/bubbles')
  }

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={handleSubmit}>
        <input
            type="text"
            name='username'
            label='username'
            value={login.username}
            onChange={handleChange}
            placeholder="Username"
          ></input>

        <input
            type="password"
            name='password'
            label='password'
            value={login.password}
            onChange={handleChange}
            placeholder="Password"
          ></input>
        <button>Login</button>
      </form>
    </>
  );
};

export default Login;


// make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route