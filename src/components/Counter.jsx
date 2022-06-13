const Counter = ({
  start = 0,
}) => {
  return (
    <button className="h-24 aspect-square bg-black absolute rounded-full top-1/3 right-1/3 text-white font-black text-4xl">
      {start}
    </button>
  )
}
export default Counter