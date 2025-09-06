import React from 'react'
import HelpBanner from '../Components/HomeHelp'
import ContactBanner from '../Components/ContactBanner'
import ContactSection from '../Components/ContactCard'
import ContactFormSection from '../Components/ContactForm'


const Contact = () => {
  return (
    <div>
      <ContactBanner/>
      <ContactSection/>
      <ContactFormSection/>
      <HelpBanner/>
    </div>
  )
}

export default Contact
