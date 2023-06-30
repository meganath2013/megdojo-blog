import { useEffect, useState } from "react";
const useFetch = ((url) =>{
    const [blog, setblog]=useState(null);
    const [isLoading, setLoad]=useState(true);
    const [Error, setError]=useState(null);

    useEffect(()=>{
        fetch(url)
        .then(res => {
            if(!res.ok)
            {
                throw Error ('error fetching data')
            }
            return (res.json())
        })
        .then(data=> {
            setblog(data);
            setLoad(false)
            setError(null)
        })
        .catch(err=>{
            setLoad(false)
            setError(err.message)
        })
    },[url])
    // const handleDelete=(id)=>{
    //     const newBlog=blog.filter(blogItr=> blogItr.id!==id)
    //     setblog(newBlog) 
    return {blog,isLoading,Error}
   
    })


export default useFetch;