import { useState,useEffect } from "react";

const ApiImages=()=>{
  const [imageArray, setImageArray]=useState([]);
  const[toggle,setToggle]=useState(true);
  const getImages=async () => {
    const response=await fetch("https://picsum.photos/v2/list")
    const data= await response.json();
    setImageArray(data)
  }

    useEffect(()=>{getImages()},[])
    return(
        <>
        <h1>Images</h1>

        <button onClick={(event)=>{setToggle(!toggle);console.log(toggle);}}>Click</button>
        
    {imageArray.map((item,index)=>{
      return(
        <>
        {toggle&& 
        <div>
          <img src={item.download_url} width={"50%"}/> 
          <h2>{item.author}</h2>
          
        </div>}
        </> 
        )
    })}
        </>
    )
}
export default ApiImages;