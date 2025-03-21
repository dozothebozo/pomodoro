import { useCountStore } from "./store"

function App() {
  const count = useCountStore((state) => state.count)
  const increment = useCountStore((state) => state.increment)
  const decrement = useCountStore((state) => state.decrement)

  return (
    <>
      <div className="content">
        <h1 className="text-3xl font-bold underline text-red-500">
          {count}
        </h1>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
      </div>
    </>
  )
}

export default App