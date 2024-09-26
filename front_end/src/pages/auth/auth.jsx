import { useContext, useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import axios from "axios";
import Login from './../Login/Login'

export default function Auth() {
  const token =localStorage.getItem('token')
  

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);  

  // useEffect(() => {
  //   async function getMe() {
  //     if (!token) {
  //       console.error("No token found, redirecting to login.");
  //       setLoading(false);
  //       return;
  //     }

  //     try {
  //       const response = await axios({
  //         method: "get",
  //         url: "http://localhost:4000/api/auth/getMe",
  //         headers: {
  //           Authorization: `Bearer ${token}`, 
  //         },
  //       });
  //       localStorage.setItem("username",response.data.name)
  //       setUser(response.data.name);  // Update user state with fetched data
  //       console.log('Fetched User Data:', response.data);
  //     } catch (error) {
  //       if (error.response) {
  //         console.error("Error response data:", error.response.data);
  //       } else if (error.request) {
  //         console.error("Error request:", error.request);
  //       } else {
  //         console.error("Error message:", error.message);
  //       }
  //     } finally {
  //       setLoading(false);  // Stop loading after the request
  //     }
  //   }

  //   getMe();
  // }, [token]);

  // // If still loading, show a loading message
  // if (loading) {
  //   return <div style={{height:'300px', display: 'flex',justifyContent:'center',alignItems:'center',fontSize:'30px'} }><h1>Loading...</h1></div>;
  // }

  // Redirect if no token or no user is fetched
  return token ? <Outlet /> :<Navigate to="/login" />;
}
