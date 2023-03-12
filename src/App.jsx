import 'antd/dist/reset.css'
import './App.css'
import Home from './pages/Home'
import content from "./json/content.json"

function App() {
  return (
    <div className="App">
      <Home
        content={content[0]}
      />
    </div>  
  )
}

export default App;
