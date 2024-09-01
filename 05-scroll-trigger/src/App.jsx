import React from 'react'
import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger'
import './App.css'

const App = () => {
  const boxRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(function () {
    gsap.from(boxRef.current, {
      scale: 0,      
      rotate: '360deg',
      ease: 'bounce',
      scrollTrigger: {
        trigger: boxRef.current,
        scroller: 'body',
        markers: true,
        start: 'top 60%',    
        end: 'top 30%',
        scrub: 3
      }
    })
  })

  return (
    <div className='w-full h-screen'>

      <div className="page1 bg-teal-900 "></div>
      <div className="page2 bg-slate-600 relative">
        <div id='box' ref={boxRef} className='absolute w-48 h-48 bg-red-600 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'></div>
      </div>
      <div className="page3 bg-amber-100 "></div>
      <div className="page4 bg-orange-200 "></div>

    </div>
  )
}

export default App