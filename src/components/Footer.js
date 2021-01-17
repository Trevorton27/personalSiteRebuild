import React from "react"
import footerStyle from "./footer.module.css"

const Footer = () => (
  <footer className={footerStyle.footer}>
    Trevor Mearns © {new Date().getFullYear()}, Built with
    {` `}
    <a style={{ color: "#fff" }} href="https://www.gatsbyjs.org">
      Gatsby
    </a>
  </footer>
)

export default Footer
