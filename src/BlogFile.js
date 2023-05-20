const BlogFile = ({bloganyname,handleDelete}) => {
    //const blogs=props.bloganyname
    //const title=props.title

return ( 
<div className="blog-list">
    <h2>Home Mega Page</h2>
    
{ bloganyname.map((blogItr) => (
<div className="blog-preview" key={blogItr.id}>
<p>{blogItr.title}</p>
<p>{blogItr.author}</p>
<button onClick={()=>handleDelete(blogItr.id)}> Delete </button>
</div>
 ))}
</div>
);
}
 
export default BlogFile;