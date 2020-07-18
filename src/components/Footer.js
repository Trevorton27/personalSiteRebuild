import React from 'react';
import footerStyle from './footer.module.css'
    ;

const Footer = () => (
    <footer className={footerStyle.footer} >
        <div className="container">
            <span >Alas, yon footer.     © {new Date().getFullYear()}, Built with
          {` `}
                <a href="https://www.gatsbyjs.org">Gatsby</a>
            </span>
        </div>
    </footer>
);

export default Footer;