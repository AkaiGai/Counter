import React, {useState} from 'react'

const App = () => {

  const backend = 'http://127.0.0.1:8000/counter/count/';

  const [result, setResult] = useState(0);
  const handleClick = async () => {
    const response = await fetch(backend, {
      method:'GET',
    });

    setResult(await response.text());
  }

  return(

    <div className="min-h-screen min-w-full
    flex justify-center items-center">
      <div className='flex justify-center items-center gap-6
      w-2xl h-40
      border rounded-2xl
      bg-amber-300'>
        <span></span>
        <button className='w-36 h-12
         drop-shadow-[0px_6px_2px_rgba(0,0,0,0.1)] rounded-full border border-zinc-300
         bg-white text-taupe-500
         hover:cursor-pointer active:scale-95 transition-all duration-150'
         onClick={handleClick}>
          COUNT
        </button>
        <span className="font-extralight text-2xl
        text-taupe-500">{`: ${result}`}</span>
      </div>
    </div>
  )

}

export default App;