import { Fragment } from 'react'
import { useState } from 'react'
import Logbook from './assets/components/Logbook'

function App() {

  return (
    <>
        <h1 className='text-center mt-5 fs-1 fw-bold'>Bitácora de <span className='text-primary'>Obra</span></h1>
        <Logbook/>
    </>
  )
}

export default App
