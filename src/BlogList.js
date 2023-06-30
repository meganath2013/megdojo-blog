import { Link } from "react-router-dom"
const BlogList = (props) => {
    const blogs=props.bloganyname

return ( 

<div className="blog-list">
{
blogs.map((blogItr) => (
<div className="blog-preview" key={blogItr.id}>
<Link to={`/blogs/${blogItr.id}`}>
<p>{blogItr.title}</p>
<p>{blogItr.author}</p>
</Link>
</div>
 ))
 }
</div>

);
}
 
export default BlogList;