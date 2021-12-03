import './App.css';
import { ItemListContainer } from './components/ItemListContainer';
import { NavBar } from './components/NavBar';

function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer message="HOLA MUNDO!"/>
    </>
  );
}

export default App;
