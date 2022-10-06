import './App.css';
import Navbar from './components/Navbar/navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div id="1" className="App">
      
      <h8 style={{ display: 'flex', justifyContent: 'space-around', color: 'white', backgroundColor:'red', fontSize: '1.1rem',fontFamily: 'Fantasy' ,}}> Ofertas Exclusivas para el Dia de la Madre!!!</h8>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={'Nuestras Fragancias'} />} />
          <Route path='/category/:categoryId' element={<ItemListContainer />} />         
          <Route path='/detail/:productId' element={<ItemDetailContainer />} />          
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

