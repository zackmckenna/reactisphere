const BasicDepth = ({ index }) => {
  return (
    <div
      className="w-1/2 p-3 mx-auto flex-1 rounded text-white bg-blue-600"
      key={index}
    >
      <div className="p-3">
        <h3>Level {index}</h3>
      </div>
    </div>
  )
}

export default BasicDepth
