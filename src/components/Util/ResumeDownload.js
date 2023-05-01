import React from "react"
import { VscFilePdf } from "react-icons/vsc"

const ResumeDownload = ({ resumeLink }) => {
  return (
    <section className="resume-download">
      <div className="wrapper">
        <a
          className="btn secondary"
          href={resumeLink[0].publicURL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <VscFilePdf />
          <span>Download my resume</span>
        </a>
      </div>
    </section>
  )
}

export default ResumeDownload
