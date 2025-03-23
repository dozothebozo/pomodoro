import { useCountStore } from "./store"

function App() {
  const count = useCountStore((state) => state.count)
  const increment = useCountStore((state) => state.increment)
  const decrement = useCountStore((state) => state.decrement)

  return (
    <>
      <div className="h-screen min-h-screen overflow-y-scroll bg-yellow-300">
        <div className="w-full max-w-2xl mx-auto px-4">
          <h1 className="text-sm sm:text-sm md:text-lg lg:text-2xl text-red-500">
            {count}
          </h1>
          <button onClick={increment}>increment</button>
          <button onClick={decrement}>decrement</button>
        </div>
      </div>
    </>
  )
}

export default App