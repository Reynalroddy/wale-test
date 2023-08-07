import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRouteAdmin = ({ children }) => {
  const { userInfo } = useSelector((state) => state.user);
// const userInfo={name:'true',
// isAdmin:true};
// const userInfo = JSON.parse(localStorage.getItem('userInfo-admin'))

return userInfo && userInfo.roles?.id==='5'? children : <Navigate to="/login" />;
};

export default ProtectedRouteAdmin;