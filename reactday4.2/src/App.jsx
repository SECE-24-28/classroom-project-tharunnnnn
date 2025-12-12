import { useState, useEffect } from "react";
import "./App.css";
import api from "./api/post";
import Home from "./Home";
import Search from "./Search";
import AddPost from "./AddPost";
import { format } from "date-fns";

function App() {
  const [posts, setPosts] = useState([]);
  const [search,setSearch] =useState("");
  const [searchRes,setSearchRes] = useState([])
  const [title,setTitle] =useState("")
  const [desc,setDesc] =useState("")


  useEffect(() => {
    const fetData = async () => {
      const res = await api.get("/feedback");
      setPosts(res.data);
    };

    fetData();
  }, []);



  
  useEffect(()=>
  {
     const demo=()=>
     {
            const filtered=posts.filter((post)=> (post.title).includes(search))
            setSearchRes(filtered)
     }

     demo()

  },[posts,search]
  )


  const handleSubmit=(e)=>{
    e.preventDefault();

    const id=(posts.length)?(Number(posts[posts.length-1].id)+1):(1)
    const datetime=format(new Date(),"MMM dd,yyy pp")

    const newObj={id:id,title:title,datetime:datetime,body:desc}
    //const newObj={id,title,datetime,desc} --> this didnt work becuz my key and value name are different if they are same means thil will work . i have body as key and the value I saved as desc , if I had saved the desc as body then that would have worked 
    api.post("/feedback",newObj)
    const newList=[...posts,newObj]
    setPosts(newList)
setTitle('')
setDesc('')


  }
  return (
    <>

    

        <Search search={search}
                setSearch={setSearch} />
                <hr />

        <AddPost title={title}
                        setTitle={setTitle}
                        desc={desc}
                        setDesc={setDesc}
                        handleSubmit={handleSubmit}
                        />

      <Home searchRes={searchRes}/>
    </>
  );
}

export default App;