import React from 'react'
import Header from '../components/head';
import Footer from './footer';

function Layout({ children }) {
    return (
        <>
            <div>
                {children}
            </div>
            <Footer />
        </>
    )
}
export default Layout