
function InputNumber({count , setCount , setError}:{count : number , setCount :React.Dispatch<React.SetStateAction<number>> , setError : React.Dispatch<React.SetStateAction<string>>}) {

const handleIncrement = ()=>{
  if( count >= 0 && count !== 0){
    setCount(--count)
    setError("")
  }
}


  return (
    <div className="custom-number-input w-1/3">
  <div className="flex flex-row h-12 w-full  rounded-xl  relative bg-transparent mt-1">
    <button data-action="decrement" className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
     onClick={(e)=>{
      handleIncrement()
      }}
      >
      <span className="m-auto text-2xl font-thin" >−</span>
    </button>
    <input type="number" className="outline-none focus:outline-none text-center w-full  bg-gray-300 font-semibold text-md hover:text-black focus:text-black md:text-basecursor-default flex items-center text-gray-700 " name="custom-input-number" value={count} />
    <button data-action="increment" className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer" 
    onClick={()=>{
        setCount(++count)
        setError("")
      }}>
      <span className="m-auto text-2xl font-thin" >+</span>
    </button>
  </div>
</div>
  )
}

export default InputNumber