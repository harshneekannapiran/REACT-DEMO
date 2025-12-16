import React from 'react'
import {useState,useEffect,createContext} from 'react';
import {Link} from 'react-router-dom';
import Login from './Login.jsx';
import Counter from './Counter.jsx';

export const dataContext =createContext();

function Home(){

    const [posts,setPosts]=useState(null);

    const data="Hello from Home";

    useEffect(()=>{
        const controller=new AbortController();
        const signal=controller.signal;
        fetch('http://localhost:3000/posts',{signal})
        .then(res=>res.json())
        .then(data=>setPosts(data)).catch(err=>{
            console.log(err);
        })


        //CleanUp function
        return(()=>{
            console.log("Unmounted,Cleaning..");
            controller.abort();
        })
    },[]);
  return (
    <div className="container">
        <Link to='/login'>Go to Login</Link>

        <dataContext.Provider value={data}><Login/></dataContext.Provider>
        <div className='row justify-center'>
        {posts && posts.map(post=>(
            <div key={post.id} className='card m-3'>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ))}
    </div>
    </div>
  )
}
export default Home;