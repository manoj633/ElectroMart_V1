import React from "react";

import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";

import Header from "./components/header";
import Footer from "./components/footer";

const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <Outlet />
          {/* In index.js router has been configured to have index as home screens
          hence the <HomeScreen/> component can be removed instead outlet can be used */}
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
