import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import {
  Marketplace,
  BusinessDetails,
  SignIn,
  SignUp,
  Home,
  BusinessAdd,
  BusinessEdit,
  Posts,
  EditPost,

} from "../pages";

const AppRoutes = () => {
  return (
    <>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/business/:id" element={<BusinessDetails />} />
          <Route path="/business-add" element={<BusinessAdd />} />
          <Route path="/business-edit/:id" element={<BusinessEdit />} />
          <Route path="/sign_in" element={<SignIn />} />
          <Route path="/sign_up" element={<SignUp />} />
          <Route path="/Posts" element={<Posts/>}></Route>
          <Route path="/EditPost" element={<EditPost/>}></Route> 
        </Routes>
       
      </Router>
    </>
  );
};

export default AppRoutes;
