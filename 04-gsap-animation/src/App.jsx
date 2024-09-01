import { useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const App = () => {
  const boxRef = useRef(null);
  const [num, setNum] = useState(0);

  const [moveX, setMoveX] = useState(0);
  const [moveY, setMoveY] = useState(0);

  const moveOnXaxis = () => {
    console.log(boxRef.current)
    boxRef.current.style.backgroundColor = 'green';

    setNum(num + 10);
    setMoveX(Math.random() * 90);
    setMoveY(Math.random() * 90)
  }

  // const moveOnYaxis = () => {
  //   console.log(boxRef.current)
  //   boxRef.current.style.backgroundColor = 'green';

  //   setNum(num + 10);
  //   setMoveY(Math.random() * 90)
  // }

  useGSAP(
    () => {
      gsap.set(boxRef.current, { rotate: 0 });

      gsap.to(boxRef.current, {
        // x: moveX,
        // y: moveY,

        left: `${moveX}%`,
        top: `${moveY}%`,        
        translateX: '-50%',
        translateY: '-50%',
        rotate: '360deg',
        duration: 0.5,
      })
      console.log("GSAP triggered")
    }, [moveX])

  return (
    <div className='w-full h-screen relative'>
      <div className="box w-96 absolute" ref={boxRef}>
        <h1>{num}</h1>
      </div>

      <button className='btn1 absolute' onClick={moveOnXaxis}>
        Move on X Axis
      </button>
      {/* <button className='btn1' onClick={moveOnYaxis}>
        Move on Y Axis
      </button> */}

    </div>
  )
}

export default App