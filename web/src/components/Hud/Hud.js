import { useState } from 'react'

const Hud = ({
  onChangeHandler,
  setOxygen,
  setDamage,
  setStress,
  oxygen,
  stress,
  damage,
}) => {
  const [toggle, setToggle] = useState(true)

  const toggleHud = () => {
    setToggle(!toggle)
  }

  return (
    <div className="bg-orange-300 space-y-2 rounded p-3 fixed left-0 top-50">
      <button
        onClick={toggleHud}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        {toggle ? '-' : '+'}
      </button>
      {toggle ? (
        <>
          <div className="space-x-1">
            {' '}
            Oxygen: {oxygen}{' '}
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={onChangeHandler.bind(this, setOxygen, oxygen, false, 1)}
            >
              -
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={onChangeHandler.bind(this, setOxygen, oxygen, true, 1)}
            >
              +
            </button>
          </div>
          <div className="space-x-1">
            {' '}
            Damage: {damage}{' '}
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={onChangeHandler.bind(this, setDamage, damage, false, 1)}
            >
              -
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={onChangeHandler.bind(this, setDamage, damage, true, 1)}
            >
              +
            </button>
          </div>
          <div className="space-x-1">
            {' '}
            Stress: {stress}{' '}
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={onChangeHandler.bind(this, setStress, stress, false, 1)}
            >
              -
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={onChangeHandler.bind(this, setStress, stress, true, 1)}
            >
              +
            </button>
          </div>
        </>
      ) : null}
    </div>
  )
}

export default Hud
