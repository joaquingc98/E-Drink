import './styles/Styles.scss';
import { ItemListContainer } from './components/ItemListContainer';
import { NavBar } from './components/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ItemDetailContainer } from './components/ItemDetailContainer';
import {CustomContext} from './components/CustomContext'


function App() {

  return (
    <CustomContext>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<ItemListContainer />} />
        <Route exact path="/category/:id" element={<ItemListContainer />} />
        <Route exact path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
    </CustomContext>
  );
}

export default App;
