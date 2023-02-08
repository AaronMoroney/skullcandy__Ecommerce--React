//react
import { BrowserRouter, Route, Routes }  from 'react-router-dom';

//styles
import './styles/utils/_mixins.scss'
//pages
import Home from './pages/Home'
import GetAllProducts from './pages/GetAllProducts'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path ='/products' element = { <GetAllProducts /> } />
        <Route path = '/' element = { < Home /> } />
      </Routes>
    </BrowserRouter>

 </>
  )
}

export default App
