import React from "react"
import { FaPhoneSquareAlt, FaGithubSquare } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

const ContactInfo = ({ contactInfo }) => {
  const { email, phone, github } = contactInfo

  return (
    <section
      className="contact-info-container"
      aria-labelledby="contact-info-title"
    >
      <h2 id="contact-info-title">Contact Info</h2>
      <div className="contact-info">
        <a href={`tel:${phone}`}>
          <FaPhoneSquareAlt />
          {`${phone}`}
        </a>
        <a href={`mailTo:${email}`}>
          <MdEmail />
          {`${email}`}
        </a>
        <a href={github} target="_blank" rel="noopener noreferrer">
          <FaGithubSquare />
          {`${github}`}
        </a>
      </div>
    </section>
  )
}

export default ContactInfo
