import React from "react";
import { GlobalStyle } from "./theme/global-style";
import { useLocation, Routes, Route, Navigate } from "react-router-dom";
import HomeScreen from "../../components/elements/HomeScreen";

const App = () => {
  const location = useLocation();

  return (
    <>
      <GlobalStyle/>

      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Navigate to="/browse"/>}/>
        <Route path="/browse" element={<HomeScreen/>}/>
      </Routes>
    </>
  );
};

export default App;
