import { useState } from "react";
import styled from "styled-components";

const DeleteAccount=()=>{
  const[email, setEmail]=useState("");
//   const[password,setPassword]=useState("");


 const submitHandler=async(event)=>{
  event.preventDefault();
  await console.log(email);
  const response = await fetch(
    "http://localhost:5001/Account/DeleteAccount",
    {
      method:"DELETE",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        Email:email
      })
    }
  );
  const output= await response.json();
  console.log(output);
//   writeCookie("JWT_token",output.token);
 }

 return(
    <>
    <div>
        <Title>
        <h1>Delete Account</h1>
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
                <div className="button">
                   <button value="submit">Delete Account</button>
                </div>       
           </form>
        </div>
        </Container>
      </div>  
    </>
 )
}
export default DeleteAccount;
const Title=styled.div`
display: flex;
justify-content: center;
/* h1{
    border-bottom: #323232 6px solid;
    border-left:  #323232 solid;
    border-right:  #323232 5px solid;
    border-radius: 5px;
} */
`;
const Container=styled.div`
/* border: blanchedalmond solid; */
display: flex;
justify-content: center;
height: 300px;

.wrapper{
    /* border: blueviolet solid; */
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