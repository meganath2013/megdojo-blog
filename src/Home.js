
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    
const {blog : data,isLoading,Error}=useFetch('http://localhost:8000/blogs');

return (
<div className="home">
<p>Hi</p>
{Error && <div> {Error} </div>}
{isLoading && <h1>Loading...</h1>}
 {data && <BlogList bloganyname={data} /> } 
 {/* handleDelete={handleDelete}/>} */}
<p>Hello</p>
</div>
);
}
export default Home;