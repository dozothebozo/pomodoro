import { useCountStore } from "./store"

function App() {
  const count = useCountStore((state) => state.count)
  const increment = useCountStore((state) => state.increment)
  const decrement = useCountStore((state) => state.decrement)

  return (
    <>
      <div className="h-screen min-h-screen overflow-y-scroll bg-yellow-300">
        <div className="content">
          <h1 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold underline text-red-500">
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