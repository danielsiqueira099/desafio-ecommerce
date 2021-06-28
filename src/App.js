import Home from './pages/Home/index'
import { AplicationProvider } from './context/index' 

function App() {
  return (
    <AplicationProvider>
      <Home />
    </AplicationProvider>
  )
}

export default App;
