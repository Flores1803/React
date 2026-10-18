import { useState } from 'react'

function Contador() {
  const [count, setCount] = useState(0)

  return (
    <div id="center">
      <div>
        <h1>Jaime Flores Mamani</h1>
      </div>

      <button
        type="button"
        className="counter"
        onClick={() => setCount((count) => count + 1)}
      >
        Count is {count}
      </button>
    </div>
  )
}

export default Contador