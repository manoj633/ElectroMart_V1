import React from "react";

import { Container } from "react-bootstrap";
import Header from "./components/header";
import Footer from "./components/footer";

const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container></Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
