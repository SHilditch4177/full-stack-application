import {useState} from 'react';
import styled from 'styled-components';

const Register=()=>{
    const [firstname, setFirstname]=useState("");
    const [lastname, setLastname]=useState("");
    const[email, setEmail]=useState("");
    const[password,setPassword]=useState("");
  
  
   const submitHandler=async(event)=>{
    event.preventDefault();
    await console.log(firstname,lastname,email,password);
    const response = await fetch(
      "http://localhost:5001/Account/Register",
      {
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify({
          Fistname:firstname,
          Lastname:lastname,
          Email:email,
          Password:password
        })
      }
    );
    const output= await response.json();
    console.log(output);
   }


   return(
    <>
    <Background>
      <div className="center">
      <Title>
      <h1>Sign-up</h1>
      </Title>
    
    <Container>
      <div className="wrapper">
         <form onSubmit={submitHandler}>
          <div className="label">
            <label>FirstName</label>
          </div>
               <input type="text" name='firstname' onChange={(event)=>{setFirstname(event.target.value)}} />
               <br/>
               <br />
            <div className="label">
              <label>LastName</label>
            </div>
               <input type="text" name='lastname' onChange={(event)=>{setLastname(event.target.value)}} />
               <br/>
               <br />
            <div className="label">
               <label>Email</label>
            </div>
               <input type="text" name='email'onChange={(event)=>{setEmail(event.target.value)}} />
               <br/>
               <br />
            <div className="label">
               <label>Password</label>
            </div>
                 <input type="text" name='password'onChange={(event)=>{setPassword(event.target.value)}}/>
                 <br/>
                 <br />
              <div className="button">
                 <button value="submit">Register</button>
              </div> 
          </form>     
      </div>
    </Container>

      </div>
      
    </Background>
    </>
   )
}
export default Register;
const Background= styled.div`
margin-left: 200px;
width: 900px;
height: 900px;
border-radius: 20px;

`;
const Title=styled.div`
display: flex;
justify-content: center;
`;

const Container=styled.div`
/* border: white solid; */
display: flex;
justify-content: center;
.wrapper{
  display: flex;
  justify-content: center;
  background-color: #242424;

  margin-top: 40px;
    height: 380px;
    width: 300px;
    border-bottom: #323232 10px solid;
    border-left:  #323232 solid;
    border-right:  #323232 10px solid;
    display: flex;
    justify-content: center;
    border-radius: 40px;

}
.label{
  /* display: flex;
  justify-content: center; */
}
.button{
  display: flex;
  justify-content: center;
}

`;