import { useState } from 'react'
import home from "./pages/home"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Heloo!</h1>
        <home />
      </div>
    </>
  );
}

export default App
