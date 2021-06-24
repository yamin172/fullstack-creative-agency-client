import React from 'react';
import HeaderBanner from '../HeaderBanner/HeaderBanner';
import Navbar from '../Navbar/Navbar';
import Topbar from '../Topbar/Topbar';
import WelcomeInfo from '../WelcomeInfo/WelcomeInfo';

const Header = () => {
    return (
        <main>
            <Topbar></Topbar>
            <Navbar></Navbar>
            <HeaderBanner></HeaderBanner>
            <WelcomeInfo></WelcomeInfo>
        </main>
    );
};

export default Header;