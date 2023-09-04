import { FC, useState } from 'react'

interface Props {}

const App: FC<Props> = () => {
  const [count, setCount] = useState(5)
  return (
    <div>
      <div className="absolute -z-10 w-screen h-screen" style={{ backgroundImage: 'url("./bg.jpg")' }}></div>
      <div className="flex flex-col h-screen items-center pt-20">
        <div className="text-6xl mb-8">{count}</div>
        <div className="mb-2">你还有{count}次扭蛋机会</div>

        <button
          className="px-6 py-2 rounded bg-black hover:bg-green-600 text-white"
          onClick={() => setCount(count => count - 1)}
        >
          消耗
        </button>
      </div>
    </div>
  )
}

export default App
