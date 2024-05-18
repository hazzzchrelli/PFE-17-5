import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import ContactUs from '../Components/ContactUs' 

const Contact = () => {
  return (
    <section>
        <div>
        <Navbar />
        </div>
    <div> 
        <ContactUs/>
    </div>
    <div>
    <Footer />
 </div>
</section>

  )
}

export default Contact