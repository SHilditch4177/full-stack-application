import { useState } from "react";
import styled from "styled-components";

const Login=()=>{
  const[email, setEmail]=useState("");
  const[password,setPassword]=useState("");


 const submitHandler=async(event)=>{
  event.preventDefault();
  await console.log(email,password);
  const response = await fetch(
    "http://localhost:5001/Account/Login",
    {
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        Email:email,
        Password:password
      })
    }
  );
  const output= await response.json();
  console.log(output.token);
  writeCookie("JWT_token",output.token);
 }

 return(
    <>
    <div>
      <Title>
        <div className="title">
        <h1>Login</h1>
        </div>
      </Title>
   

    <Container>
      <div className="wrapper">
        <form onSubmit={submitHandler}>
          <div className="email">
             <label>Email</label>
          </div>
              <input type="text" name="email" onChange={(event)=>{setEmail(event.target.value)}}/>
              <br />
              <br />
          <div className="Password">
               <label>Password</label>
          </div>
              <input type="text" name="password" onChange={(event)=>{setPassword(event.target.value)}} />
              <br />
              <br />
          <div className="button">
               <input type="submit" value="submit"/>
          </div>
  
        </form>
      </div>
    </Container>
    
    </div>

    </>
 )
}
export default Login;
const Title=styled.div`
margin-top: 40px;
/* border: beige solid; */
display: flex;
justify-content: center;
.title{
  /* border-bottom: #323232 6px solid;
    border-left:  #323232 solid;
    border-right:  #323232 5px solid;
    border-radius: 5px; */
    height: 50px;
    width: 160px;
    display: flex;
    justify-content: center;
    align-items: center;
    }
`;
const Container=styled.div`
/* border: white solid; */
display: flex;
justify-content: center;
.wrapper{
  margin-top: 40px;
    height: 180px;
    width: 260px;
    border-bottom: #323232 10px solid;
    border-left:  #323232 solid;
    border-right:  #323232 10px solid;
    display: flex;
    justify-content: center;
    border-radius: 40px;
    background-color: #242424;
}
.email{
  /* border: blue solid; */
  /* display: flex;
  justify-content: center; */
}
.Password{
  /* display: flex;
  justify-content: center; */
}
.button{
  display: flex;
  justify-content: center;
}

`;