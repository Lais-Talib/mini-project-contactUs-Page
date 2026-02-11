import React from 'react'
import Navigation from './components/Navigation/Navigation'
import './App.css'
import ContactHeader from './components/Navigation/ContactHeader/ContactHeader'
import ContactForm from './components/Navigation/ContactForm/ContactForm'
const App = () => {
  return (
    <div>
      <Navigation></Navigation>
      <main className='main_container'>

      <ContactHeader></ContactHeader>
      <ContactForm></ContactForm>
      </main>
    </div>
  )
}

export default App
