const BlogList = (props) => {
    const blogs=props.bloganyname
    const handleDelete=props.handleDelete

return ( 
<div className="blog-list">
{blogs.map((blogItr) => (
<div className="blog-preview" key={blogItr.id}>
<p>{blogItr.title}</p>
<p>{blogItr.author}</p>
<button onClick={()=>handleDelete(blogItr.id)}> Delete </button>
</div>
 ))}
</div>
);
}
 
export default BlogList;