import {useState,useEffect,useContext,useRef} from'react';
import{dataContext } from'./Home.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

function Counter(){

    const [count,setcount]=useState(0);

    let refCount=useRef(0);
     
     const data=useContext(dataContext);

    function handleup(){
        setcount(precount=>precount+1);
        refCount.current+=1;
       console.log("count "+count);
       console.log("refCount "+refCount.current);
    }

    useEffect(()=>{
        console.log(count);
        console.log(refCount);
    });
    return(
        <>
        <h2>{data}</h2>
        <h2>{refCount.current}</h2>
        <button className="btn btn-info" onClick={handleup}>Up</button> 
        <button className="btn btn-danger" onClick={()=>(setcount(refCount.current))}>Update</button> 
        </>

    );
}

export default Counter;