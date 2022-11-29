import './App.css'
import gsap from 'gsap'
import { useEffect, useRef } from 'react'

function App() {
  const timeline = gsap.timeline({
    repeat: false,
    defaults:{duration:1, ease:'easeInOut'}
  })
  const e1Ref = useRef()
  const e2Ref = useRef()
  const e3Ref = useRef()
  const lineRef = useRef()

  const data = [
    { id: 1, year: 2012, name: '12 old event', ref: e1Ref },
    { id: 2, year: 2018, name: 'collection event', ref: e2Ref },
    { id: 3, year: 2022, name: 'army event', ref: e3Ref },
  ]

  useEffect(() => {
    timeline
    .from(e1Ref.current, { autoAlpha: 0, x: -100, duration: .5 })
    .from(e2Ref.current, { autoAlpha: 0, x: -100, duration: .5 })
    .from(e3Ref.current, { autoAlpha: 0, x: -100, duration: .5 })
    .to(e1Ref.current, { autoAlpha: 0, x: -100, duration: .5 , delay:1})
    .to(e2Ref.current, { autoAlpha: 0, x: -100, duration: .5 })
    .to(e3Ref.current, { autoAlpha: 0, x: -100, duration: .5 })
    .to(lineRef.current, { autoAlpha: 0, duration: 1 })
  },[])

  return (
    <div className="App">
      <h1>GSAP + React</h1>
      <div className="card">
        <div className='mainBox'>
          <div className='wrapper'>
            {data.map(el => {
              return (
                <div key={el.id} ref={el.ref} style={{ padding: "0 10px" }}>
                  <h1>{ el.year}</h1>
                  <p>{ el.name}</p>
                </div>
              )
            })}
          </div>
          <div className='line' ref={lineRef}></div>
        </div>
      </div>
    </div>
  )
}

export default App
