import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";

const App = () => {
    return <div>
        {/* Navbar */}
        <Navbar />
        {/* Content */}
        <HomePage />
        {/* Footer */}
        <Footer />
    </div>;
};

export default App;
