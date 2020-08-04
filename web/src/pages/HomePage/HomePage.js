import { useState, useEffect } from 'react'
import { Link } from '@redwoodjs/router'
import BasicDepth from 'src/components/BasicDepth'
import ActionDepth from 'src/components/ActionDepth'
import StartDepth from 'src/components/StartDepth'
import ZoneDepth from 'src/components/ZoneDepth'
import Header from 'src/components/Header'
import Hud from 'src/components/Hud'

import { level1 } from 'src/level1'

const generateDepth = (depth, index) => {
  switch (depth.type) {
    case 'basic':
      return <BasicDepth index={index} />
    case 'start':
      return <StartDepth />
    case 'depthZone':
      return <ZoneDepth />
    case 'action':
      return <ActionDepth index={index} depth={depth} />
    default:
      return null
  }
}

const HomePage = () => {
  const [oxygen, setOxygen] = useState(0)
  const [stress, setStress] = useState(0)
  const [chapter, setChapter] = useState(0)
  const [stressZone, setStressZone] = useState(0)
  const [damage, setDamage] = useState(0)
  const [dice, setDice] = useState(0)
  const [currentDepth, setCurrentDepth] = useState(0)

  useEffect(() => {
    console.log(level1)
  }, [])

  // dynamically changes state by binding to setState, passing state, true for increment, false for decrement, and value

  const onChangeHandler = (setIdentifierState, value, type, byValue, event) => {
    type
      ? setIdentifierState(value + byValue)
      : setIdentifierState(value - byValue)
  }

  return (
    <>
      <div className="p-3 mx-auto container">
        <Header />
        <Hud
          onChangeHandler={onChangeHandler}
          setOxygen={setOxygen}
          setStress={setStress}
          setDamage={setDamage}
          setCurrentDept={setCurrentDepth}
          currentDepth={currentDepth}
          oxygen={oxygen}
          stress={stress}
          damage={damage}
        />
        <div className="flex flex-col space-y-6 bg-gray-200">
          {level1.levelDepths.map((depth, index) => {
            console.log(index, currentDepth)
            return (
              <div key={index}>
                {generateDepth(depth, index)}
                <div className="text-center">
                  {index === currentDepth ? <p>you are here ^</p> : null}{' '}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default HomePage
