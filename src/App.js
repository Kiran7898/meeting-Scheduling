import React from 'react'
import Navbar from './pages/Navbar'
import Pricing from './pages/Pricing'
import CustomCalendar from './pages/CustomCalendar';
import FormSection from './pages/FormSection';



const App = () => {
  return (
    <div class="mx-20 mt-8">
      <Navbar />
      <Pricing />
      <FormSection />
    </div>
  )
}

export default App
