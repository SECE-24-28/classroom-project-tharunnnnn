import { useState } from 'react'
import './App.css'
import api from './api/stu_api'
function App() {
  const [Slist,setSlist] = useState([])
  useEffect(()=>{
    const fetData=async ()=>{
      try{
        const res = await api.get("/student")
        setSlist(res.data)
        //console.log(res.data)
      }
      catch(err){
        //console.error(err)
      } 
    }
    fetData()
  },[])

  return (
    <>
    {
      Slist.map((stu)=>
      {
        <p>{stu.sid}-{stu.sname}-{stu.smark}</p>
      })
    }
      
    </>
  )
}

export default App              