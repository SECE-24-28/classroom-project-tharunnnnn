import './App.css'
function App() {
  let fr=[1,2,3]
  return (
    <>
      {
        fr.map((num,idx)=>{
          return <h2 key={idx}>{num}</h2>
        }
      )
      }
    </>
  )
}

export default App