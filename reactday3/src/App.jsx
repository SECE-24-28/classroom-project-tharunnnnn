import './App.css'
import { DataProvider } from './context/DataContext'
import One from './One'
import Three from './Three'
import Two from './Two'

function App() {
  return (
<>  
      <h1>Anyno</h1>
      <DataProvider>
            <One />
            <Two />
            <Three />
      </DataProvider>

</>    
    
  )
}

export default App