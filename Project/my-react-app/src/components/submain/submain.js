import Footer from "../footer/footer";

import React from 'react';
import Topbar from "../topbar/topbar";
import Dashboard from "../../pages/dashboard";
import Medexer from "../../pages/medexer";
import Report from "../../pages/report";
import { Routes, Route } from "react-router-dom";

const Submain = () => {
    return (
        <div className="h-full w-full flex flex-col ">
            <Topbar/>
             <Routes> 
                <Route path="/" element={<Dashboard />} />
                <Route path="/medexer" element={<Medexer />} /> 
                <Route path="/report" element={<Report />} /> 
            </Routes>
            <Footer/>
        </div>
    );
};

export default Submain;
