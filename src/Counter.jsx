import { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0)

    const increment = () => setCount(count + 1)
    const decrement = () => setCount(count - 1)
    const plusTen = () => setCount(count + 10)
    const minusTen = () => setCount(count - 10)

    return (
        <div>
            <span>Current Count: ${count}</span>
            <br />
            <button onClick={increment}> + </button>
            <button onClick={decrement}> - </button>
            <br />
            <button onClick={plusTen}> +10 </button>
            <button onClick={minusTen}> -10 </button>
        </div>
    )
}

export default Counter