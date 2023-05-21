import { useEffect, useState } from "react";
import BlogFile from "./BlogFile";

const Home = () => {
    
const [blog, setblog]=useState(null);
const [isLoading, setLoad]=useState(true);

useEffect(()=>{
    fetch('http://localhost:8000/blogs')
    .then(res => {
        return (res.json())
    })
    .then(data=> {
        setblog(data);
        setLoad(false)
    })
},[])
const handleDelete=(id)=>{
    const newBlog=blog.filter(blogItr=> blogItr.id!==id)
    setblog(newBlog)    
}
return (
<div className="home">
<p>Hi</p>
{isLoading && <h1>Loading...</h1>}
 {blog && <BlogFile bloganyname={blog} handleDelete={handleDelete}/>}
<p>Hello</p>
</div>
);
}
export default Home;