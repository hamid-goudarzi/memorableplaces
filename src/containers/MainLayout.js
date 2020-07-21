import React from 'react';
import Section1 from '../components/sections/Section1';
import Section2 from '../components/sections/Section2';
import Section3 from '../components/sections/Section3';
import Section4 from '../components/sections/Section4';
import Header from '../components/common/Header';
import Navbar from '../components/common/Navbar';
import Banner from '../components/common/Banner';
import Footer from '../components/common/Footer';



const MainLayout = () => {
    return (
        <div classNameName="landing">

            {/* <!-- Header --> */}
            <Header/>

            {/* <!-- Nav --> */}
            <Navbar/>

            {/* <!-- Banner --> */}
            <Banner/>

            {/* <!-- One -->  <!--cards -->*/}
            <Section1/>
            
            {/* <!-- Four --> <!-- form input -->*/}
            <Section4 />

            {/* <!-- Two --> <!-- images -->*/}
            <Section2 />

            {/* <!-- Three --> <!-- new path -->*/}
            <Section3 />

       

            {/* <!-- Footer --> */}
            <Footer/>

        </div>
    );
}

export default MainLayout;