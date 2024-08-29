import { useState } from "react";
import styled from "styled-components";

const ChangePassword=()=>{
  const[email, setEmail]=useState("");
  const[password,setPassword]=useState("");


 const submitHandler=async(event)=>{
  event.preventDefault();
  await console.log(email,password);
  const response = await fetch(
    "http://localhost:5001/Account/UpdatePassword",
    {
      method:"PUT",
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
//   console.log(output.token);
//   writeCookie("JWT_token",output.token);
 }

 return(
    <>
    <div>
        <Title>
        <h1>ChangePassword</h1>
        </Title>
        <Container>
            <div className="wrapper">
            <form onSubmit={submitHandler}>
                <div className="label">
                   <label>Email</label>
                </div>
                   <input type="text" name="email" onChange={(event)=>{setEmail(event.target.value)}}/>
                    <br />
                   <br />
                 <div className="label">
                    <label>new Password</label>
                 </div>
                    <input type="text" name="password" onChange={(event)=>{setPassword(event.target.value)}} />
                    <br />
                    <br />
                    <div className="button">
                        <button value="submit">ChangePassword</button>
                    </div>
             </form>
            </div>
        </Container>
   
    </div>

    </>
 )
}
export default ChangePassword;
const Title=styled.div`
display: flex;
justify-content: center;
`;
const Container=styled.div`
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

.button{
    display: flex;
    justify-content: center;
}

`;