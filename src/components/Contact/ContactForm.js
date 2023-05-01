import React from "react"
import { useForm, ValidationError } from "@formspree/react"

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mzbqywqv")
  if (state.succeeded) {
    return <p>Thanks for contact me!</p>
  }

  return (
    <section
      className="contact-form-container"
      aria-labelledby="contact-form-title"
    >
      <h2 id="contact-form-title">Contact Me</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">
          Your name:
          <input id="name" type="name" name="name" />
        </label>
        <ValidationError prefix="Name" field="name" errors={state.errors} />
        <label htmlFor="email">
          Your email:
          <input id="email" type="email" name="email" />
        </label>
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <label htmlFor="message">
          Your message:
          <textarea id="message" name="message"></textarea>
        </label>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button type="submit" disabled={state.submitting}>
          Send
        </button>
      </form>
    </section>
  )
}

export default ContactForm
