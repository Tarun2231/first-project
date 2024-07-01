
const FirstComponent = ({data,fn}) => {
  return (
    <div>
        <button onClick={()=>{fn(10)}}>set10</button>
      {data}
    </div>
  )
}

export default FirstComponent
