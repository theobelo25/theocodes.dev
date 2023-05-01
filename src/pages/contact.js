import React from "react"
import { graphql } from "gatsby"
import SecondaryHero from "../components/Layout/SecondaryHero/SecondaryHero"
import ContactInfo from "../components/Contact/ContactInfo"
import ContactForm from "../components/Contact/ContactForm"
import AnimatePage from "../components/Util/AnimatePage"

const contact = ({ data }) => {
  const { strapiContactInfo: contactInfo } = data

  return (
    <AnimatePage>
      <SecondaryHero
        title="contact"
        desc="Contact me  with using any of the information below"
      />
      <div className="contact-content wrapper">
        <ContactInfo contactInfo={contactInfo} />
        <ContactForm />
      </div>
    </AnimatePage>
  )
}

export const query = graphql`
  query {
    strapiContactInfo {
      email
      github
      phone
    }
  }
`

export default contact
