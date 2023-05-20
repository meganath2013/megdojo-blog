import { useState } from "react";
import BlogFile from "./BlogFile";

const Home = () => {
    
const [blog, setblog]=useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);
const handleDelete=(id)=>{
    const newBlog=blog.filter(blogItr=> blogItr.id!==id)
    setblog(newBlog)
}
return (
<div className="home">
<p>Hi</p>
<BlogFile bloganyname={blog} handleDelete={handleDelete}/>
<p>Hello</p>
</div>
);
}
export default Home;