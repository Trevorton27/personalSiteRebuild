import React from "react"
import footerStyle from "./footer.module.css"

const Footer = () => (
  <div className={footerStyle.footer}>
    Trevor Mearns © {new Date().getFullYear()}, Built using
    {` `}
    <a
      style={{ color: "#fff", textDecoration: "none", minHeight: "30px" }}
      href="https://www.gatsbyjs.org"
    >
      Gatsby
    </a>
  </div>
)

export default Footer
