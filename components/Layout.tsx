import React from 'react';
import Footer from './Footer/Footer';
import MetaHeader from './MetaHeader';
import Navbar from './Navbar/Navbar';

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <React.Fragment>
            <MetaHeader />
            <Navbar />
            <main>
                {/*all Page components goes here*/}
                {children}
            </main>
            <Footer />
        </React.Fragment>
    )
}

export default Layout;