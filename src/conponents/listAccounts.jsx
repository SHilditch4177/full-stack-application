import { useState } from "react";
import readCookies from "../utils/readCookies";
import styled from "styled-components";

const ListAccounts=()=>{
    const [userlist,setUserList]=useState([])
    const [listOn,setListOn]=useState(false)
    const clickHandler2=async(event)=>{
        setListOn(false);
    }
    const clickHandler=async (event) => {
        let token=readCookies("JWT_token");
        console.log(token);

        let reply="Barer "+token;
        const response=await fetch(
            "http://localhost:5001/Account/ListAccounts",
            {
                method:"GET",
                headers:{
                    "Conent-Type":"application/json",
                    "Authorization":reply
                }
            }
        );
        const output=await response.json;
        console.log(output.userlist);
        setUserList(output.userlist);
        setListOn(true);  
    }
    return(
        <>
        <div>
          <div>
            <Top>
               <div>
                   <h1>List of accounts</h1>
                   <div className="buttons">
                       <button className="on" onClick={clickHandler}>on</button>
                       <button className="off" onClick={clickHandler2}>off</button>
                   </div>
               </div>
            </Top>
            <Bottom>
            <h1>Account Archieve</h1>
                {userlist.map((item,index)=>{
                    return(
                        <>
                        {
                            listOn&&
                            <>
                            <h2>Name={item.firstname}</h2>
                            <h2>Email={item.email}</h2>
                            </>
                        }
                        
                        </>
                    )
                })}
                
                
            </Bottom>
          </div>
        </div>
        </>
    )
}
export default ListAccounts;
const Top=styled.div`
/* border: white solid; */
display: flex;
justify-content: center;
.buttons{
    /* border: red solid; */
    display: flex;
    justify-content: center;
}
.on{
    margin-right: 6px;
}
`;
const Bottom=styled.div`
/* border: blue solid; */
display: flex;
justify-content: center;
`;
