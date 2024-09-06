import { useState } from 'react'
import './App.css'

function App() {
  const [show, setShow] = useState(false)
  const [showForm, setShowForm] = useState(false)

  function handleShowForm() {
    setShowForm(!showForm)
  }

  function handleSubmit() { 
    
  }

  function handleShow() {
    setShow(!show)
  }

  return (
    <body className='min-h-dvh bg-purple-800 flex flex-col items-center'>
      <div className='w-full bg-white bg-opacity-30 py-8'>
        <h1 className='text-center text-7xl sm:text-8xl text-white'>BIRTHDAY PARTY</h1>
        <p className='text-center text-2xl mt-8 text-white'>25 DJ PROFESIONALES<br />ALBERCA & ZONA DE CAMPING</p>
      </div>
      <h1 className='text-center text-6xl rounded-2xl mt-8 p-8 font-semibold bg-yellow-500'>24 HORAS DE MUSICA</h1>
      <div className='flex flex-col sm:flex-row justify-center'>
        <div className='border-cyan-300 sm:border-r-2 text-4xl text-center p-4 my-4'>
          <h3>SEPTIEMBRE</h3>
          <h3 className='text-6xl'>28 & 29</h3>
        </div>
        <div className='flex flex-col items-center'>
          <p className='text-center px-4 my-4 font-semibold text-xl'>
            HORA 8:00 PM<br/>
            CALLE LAURELES 58<br/>
            IXTLAHUACAN DE LOS MEMBRILLOS, JAL.
          </p>
          <button onClick={handleShow} className='m-3 p-2 text-2xl font-semibold text-purple-600 bg-lime-400 rounded-3xl border-2 border-green-600 transition ease-in-out delay-150 hover:scale-110'>
            {`${show ? 'OCULTAR MAPA' : 'VER MAPA'}`}
          </button>
        </div>
      </div>
      <div className='my-4 hidden'>
        <button className={`bg-blue-800 p-3 rounded-2xl text-white font-semibold text-lg border-2 border-color-white ${showForm ? 'hidden' : ''}`} onClick={handleShowForm}>
          Asistire
        </button>
        <form className={`mt-8 rounded-lg flex flex-col items-center ${showForm ? '' : 'hidden'}`} action="">
          <input className='p-2 rounded-xl' type="text" id="" placeholder='Nombre' />
          <button className='mt-4 bg-blue-800 w-3/5 p-3 rounded-2xl text-white font-semibold text-lg border-2 drop-shadow-lg border-color-white' onClick={handleSubmit}>Submit</button>
        </form>
      </div>
      <div className={`flex flex-col items-center sm:h-80 sm:w-96 ${show ? 'h-80 w-80':''}`}>
        <iframe className={`rounded-lg ${show ? 'h-full w-full ' : 'hidden'}`} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3738.7445576078762!2d-103.23712922475947!3d20.434590481070195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842f493b6863fe57%3A0x17e72080374733f8!2sTerraza%20Gizane!5e0!3m2!1ses-419!2smx!4v1725604341223!5m2!1ses-419!2smx" loading="lazy"></iframe>
        <a href='https://maps.app.goo.gl/TCKNkj5xEwpVx4bp7' className={`${show ? '' : 'hidden'} sm:block m-3 p-2 font-semibold text-xl text-purple-600 bg-lime-400 rounded-3xl border-2 border-green-600 transition ease-in-out delay-150 hover:scale-105`}>
          VER EN MAPS
        </a>
      </div>
    </body>
  )
}

export default App
