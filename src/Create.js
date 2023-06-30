import { useState } from "react";
import { useHistory } from "react-router-dom";
const Create = () =>{

const [title,setTitle] = useState('Enter Title here') 
const [body,setBody] = useState('Enter Body here')
const [author,setAuthor] = useState('Enter Body here')  
const history=useHistory();
const submitForm=(e)=>{
    e.preventDefault();
    const blog={title,body,author}
    fetch('http://localhost:8000/blogs/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      // history.go(-1);
      history.push('/');
    })
  }


return (
    <div>
        <h2>Add a new Blog</h2>
        <form onSubmit={submitForm}>

        <label> Title: </label>
        <input type= "text" required value={title} onChange={(e)=>setTitle(e.target.value)}/>

        <label> Author: </label>
        <input type= "text" required value={author} onChange={(e)=>setAuthor(e.target.value)}/>
        
        <label> Body: </label>
        <textarea required value={body} onChange={(e)=>setBody(e.target.value)}/>

        <button>Add Blog</button>

        </form>

    </div>
    

);
}
export default Create;