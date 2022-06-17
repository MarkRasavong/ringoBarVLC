import React from 'react';
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
        </React.Fragment>
    )
}

export default Layout;