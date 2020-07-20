import React from 'react';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import SEO from "../components/seo";

const PrimaryLayout = (props) => (
    <div>
        <SEO title="Home" />
        <Header />
        <div className="container" >
            <div className="row justify-content-md-center">
                <div className={props.column}>
                    {props.children}
                </div>
            </div>
        </div>
        <Footer />
    </div>
);

export default PrimaryLayout;