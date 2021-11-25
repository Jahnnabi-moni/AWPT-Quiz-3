import React from "react"
import { Link } from "react-router-dom";
import Clients from "./Clients";
import About from "./About";
import Hero from './Hero';
import Counts from "./Counts";
import Services from "./Services";
import Cta from "./Cta";
import Testimonials from "./Testimonials";
import Portfolio from "./Portfolio";
import Team from "./Team";
import Pricing from "./Pricing";
import Faq from "./Faq";
import Contact from "./Contact";
const Home = () => {
    return(
        <div>

            <Hero/>
            <main id="main">
                <Clients/>
                <About />
                <Counts/>
                <Services/>
                <Cta />
                <Testimonials/>
                <Portfolio/>
                <Team/>
                <Pricing/>
                <Faq/>
                <Contact/>
            </main>




        </div>
    )
}
export default Home;