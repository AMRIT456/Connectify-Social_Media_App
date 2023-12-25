"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getPosts } from "./api";
import Home from "./home"
import Loader from "./loader";
import Navbar from "./navbar";

function App(){
    const [posts,setposts]=useState([]);
    const [loading,setloading]=useState(true);
    useEffect(()=>{
        const fetchPosts=async()=>{
            const response=await getPosts();
            console.log('response',response);
            if(response.success){
                setposts(response.data.posts);
                
            }
            setloading(false);
        }
        fetchPosts();
    },[]);
    console.log(posts);
    if(loading){
        return <Loader/>
    }
    return(
        <div className="App">
            <Navbar/>
            <Home posts={posts} />
        </div>
    )
}

export default  App;