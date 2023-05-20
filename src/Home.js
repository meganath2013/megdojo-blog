import { useState } from "react";

const Home = () => {
    
const [blog, setblog]=useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ])
return (
<div className="Home">
    <h2>Home Mega Page</h2>
    <p/>
    {blog.map(blogItr =>(
    <div className="blog-preview" key={blogItr.id}>
<p>Title is {blogItr.title}
</p>
<p>
   Written by  {blogItr.author}
</p>
    </div>


    ))}
</div>
);
}
 
export default Home;