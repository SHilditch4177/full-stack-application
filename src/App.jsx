import { useState, useEffect } from 'react'
import { Route,Routes,BrowserRouter, Link } from 'react-router-dom'
import styled from 'styled-components'
import { Box } from './conponents/box'
import Login from './conponents/login'
import Register from './conponents/registerUser'
import ListAccounts from './conponents/listAccounts'
import ApiImages from './conponents/API'
import DeleteAccount from './conponents/DeleteAccount'
import ChangePassword from './conponents/ChangePassword'
import BGimage from '../public/background.jpg'
import length from '../public/length.png'
const App=()=>{
  
  return (
    <>
    <BrowserRouter>
    <Background>
    <Title>
     <h1>API/linking backend to frontend</h1>
     </Title>
     
      <TopBar>
        <Wrapper>
          <Logindiv><Link to="/login">LogIn</Link></Logindiv>
          <SignUpdiv><Link to="/Register">Sign-up</Link></SignUpdiv>
          <Passworddiv><Link to="/ChangePassword">Change-Password</Link></Passworddiv>
          <Deletediv><Link to="/RemoveAccount">Delete-Account</Link></Deletediv>
          <Listdiv><Link to="/ListAccounts">List-Of-Accounts</Link></Listdiv>
          <Picturesdiv><Link to="/access">Images</Link></Picturesdiv>
        </Wrapper>
     </TopBar>
     <div className="imagestrip">
      <div className="padding">

     <Routes>
      <Route path="/" element={<ApiImages/>}></Route>
        <Route path="/login" element={<Login/>}/>
        <Route path="/Register" element={<Register/>}/>
        <Route path="/ChangePassword" element={<ChangePassword/>}/>
        <Route path="/RemoveAccount" element={<DeleteAccount/>}/>
        <Route path="/ListAccounts" element={<ListAccounts/>}/>
        <Route path="/access" element={<ApiImages/>}/>
     </Routes>

      </div>
     </div>
    </Background>
     </BrowserRouter>
    </>
    )
}

export default App
const Background=styled.div`
/* border: white solid; */
height: 10000px;
.imagestrip{
  /* border: white solid; */
  height: 1600px;
}
.padding{
  /* border: blue solid; */
  margin-left: 150px;
  margin-right: 150px;
  height: 1500px;
  border-top: #323232 solid;
  border-bottom: #323232 10px solid;
border-left:  #323232 solid;
border-right:  #323232 10px solid;
border-radius: 20px;
background-image: url(background.jpg);
background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
/* background-image: url(length.png); */
}
`;

const Title=styled.div`
border: #323232 solid;
background-color: #242424;
display: flex;
justify-content: center;
border-right: #323232 5px solid;
border-bottom: #323232 5px solid;
`;
const TopBar=styled.div`
/* border: red solid; */
display: flex;
justify-content: center;
height: 40px;

`;
const Wrapper=styled.nav`
/* border: grey solid; */
display: flex;
border-bottom: #323232 5px solid;
border-left:  #323232 solid;
border-right:  #323232 5px solid;
border-radius: 5px;
`;
const Logindiv=styled.div`
/* border: blue solid; */
margin-right: 10px;
a:visited { text-decoration: none; color:white; }
a:hover { text-decoration: none; color:blue; }
a:focus { text-decoration: none; color:yellow; }
a:hover, a:active { text-decoration: none; color:black }
`;
const SignUpdiv=styled.div`
/* border: green solid; */
margin-right: 10px;
a:visited { text-decoration: none; color:white; }
a:hover { text-decoration: none; color:blue; }
a:focus { text-decoration: none; color:yellow; }
a:hover, a:active { text-decoration: none; color:black }
`; 
const Passworddiv=styled.div`
margin-right: 10px;
/* border: white solid; */
a:visited { text-decoration: none; color:white; }
a:hover { text-decoration: none; color:blue; }
a:focus { text-decoration: none; color:yellow; }
a:hover, a:active { text-decoration: none; color:black }
`;
const Deletediv=styled.div`
margin-right: 10px;
a:visited { text-decoration: none; color:white; }
a:hover { text-decoration: none; color:blue; }
a:focus { text-decoration: none; color:yellow; }
a:hover, a:active { text-decoration: none; color:black }
`;
const Listdiv=styled.div`
/* border: white solid; */
margin-right: 10px;
a:visited { text-decoration: none; color:white; }
a:hover { text-decoration: none; color:blue; }
a:focus { text-decoration: none; color:yellow; }
a:hover, a:active { text-decoration: none; color:black }
`;
const Picturesdiv=styled.div`
/* border: orange solid; */
margin-right: 10px;
a:visited { text-decoration: none; color:white; }
a:hover { text-decoration: none; color:blue; }
a:focus { text-decoration: none; color:yellow; }
a:hover, a:active { text-decoration: none; color:black }
`;