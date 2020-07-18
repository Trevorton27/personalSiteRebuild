import React from "react"
import Footer from '../components/Footer.js';
import SEO from "../components/seo";
import Header from '../components/Header.js';

const IndexPage = () => (
    <div>
        <SEO title="Home" />
        <Header />
        <div className="container" >
            <div className="row justify-content-md-center">
                <div className="col-xs-6">
                    <h1 >About Us</h1>
                    <p>
                        Fusce neque. Sed in libero ut nibh placerat accumsan. Fusce risus nisl, viverra et, tempor et, pretium in, sapien. Donec mi odio, faucibus at, scelerisque quis, convallis in, nisi. Maecenas nec odio et ante tincidunt tempus.

                        Phasellus volutpat, metus eget egestas mollis, lacus lacus blandit dui, id egestas quam mauris ut lacus. Nullam tincidunt adipiscing enim. Nulla sit amet est. Nullam quis ante. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.

                        Donec vitae sapien ut libero venenatis faucibus. Suspendisse non nisl sit amet velit hendrerit rutrum. Nullam tincidunt adipiscing enim. Pellentesque auctor neque nec urna. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </p>

                </div>
            </div>

        </div>
        <Footer />
    </div>


)

export default IndexPage
