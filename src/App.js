import './App.css';
import Navbar from './components/Navbar/navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div id="1" className="App">
      
      <h8 style={{ display: 'flex', justifyContent: 'space-around', color: 'yellow', backgroundColor:'#f1114a', fontSize: '1.1rem',}}> Ofertas Exclusivas para el Dia de la Madre!!!</h8>

      <Navbar />
      <ItemListContainer greeting={'Nuestras Fragancias'} />
      
    </div>
  );
}

export default App;

