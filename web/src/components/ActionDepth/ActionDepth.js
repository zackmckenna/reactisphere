const ActionDepth = ({ index, depth }) => {
  return (
    <div
      className="w-1/2 p-3 mx-auto rounded text-white bg-red-600"
      key={index}
    >
      <div className="p-3">
        <h3>Level {index}</h3>
        {depth.availableActions
          ? depth.availableActions.map((action, index) => {
              if (action.stress) {
                return <p>stress {action.stress}</p>
              } else if (action.oxygen) {
                return <p>oxygen {action.oxygen}</p>
              } else {
                return
              }
            })
          : null}
      </div>
    </div>
  )
}

export default ActionDepth
