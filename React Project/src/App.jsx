import { useState } from 'react'
import Pages from "./pages/Pages"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>HalalFoods</h1>
        <Pages />
      </div>
    </>
  );
}

export default App
