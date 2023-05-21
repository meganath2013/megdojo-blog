import { useEffect, useState } from "react";
import BlogFile from "./BlogFile";

const Home = () => {
    
const [blog, setblog]=useState(null);

useEffect(()=>{
    fetch('http://localhost:8000/blogs')
    .then(res => {
        return (res.json())
    })
    .then(data=> {
        setblog(data);
    })
},[])
const handleDelete=(id)=>{
    const newBlog=blog.filter(blogItr=> blogItr.id!==id)
    setblog(newBlog)    
}
return (
<div className="home">
<p>Hi</p>
 {blog && <BlogFile bloganyname={blog} handleDelete={handleDelete}/>}
<p>Hello</p>
</div>
);
}
export default Home;