import React from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

const PageWrapper = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default PageWrapper;
