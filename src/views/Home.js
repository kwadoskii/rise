import React from 'react';
import Navbar from '../components/Navbar';
import Jumbotron from '../components/Jumbotron';
import Search from '../components/Search';
import SuggestedLocation from '../components/SuggestedLocation';
import TopPicks from '../components/TopPicks';
import AvailabeCategory from '../components/AvailabeCategory';
import Footer from '../components/Footer';
import BeforeFooter from '../components/BeforeFooter';

const Homepage = () => {
    return (
        <div>
            <Navbar />
            <Jumbotron />
            <Search />
            <SuggestedLocation />
            <TopPicks />
            <AvailabeCategory />
            <BeforeFooter />
            <Footer />
        </div>
    );
}

export default Homepage;