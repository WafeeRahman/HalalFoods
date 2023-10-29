import { useState } from 'react'
import Pages from "./pages/Pages"
import Category from './components/Category';
import { BrowserRouter } from "react-router-dom";
import Search from './components/Search';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>HalalFoods</h1>
        <BrowserRouter>
        <Search></Search>
        <Category></Category>
        <Pages />
        </ BrowserRouter>
      </div>
    </>
  );
}

export default App
