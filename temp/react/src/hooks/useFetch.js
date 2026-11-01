import { useState , useEffect } from "react";

export function usePostTitle(){
      const[post , setPost] = useState({});
    
      async function getPosts(){
        const respone = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const json = await respone.json();
        setPost(json);
      }
    
      useEffect(() =>{
        getPosts();
      },[])
    
      return post.title
           
}

export function useFetch(url){
      const[finalData , setFinalData] = useState({});
      const [loading, setLoading] = useState(true);
    
      async function getDetails(){
        setLoading(true);
        const respone = await fetch(url);
        const json = await respone.json();
        setFinalData(json);
        setLoading(false);
      }
    
      useEffect(() =>{
        getDetails();
      },[url])
    
      return {
        finalData, 
        loading
      }
           
}