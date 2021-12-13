import './styles/Styles.scss';
import { ItemListContainer } from './components/ItemListContainer';
import { NavBar } from './components/NavBar';
import { ItemCount } from './components/ItemCount';

function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer message="Stock maximo: 10 unidades!"/>
      {/* <ItemCount stock={10}/> */}
    </>
  );
}

export default App;
