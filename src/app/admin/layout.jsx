import React from 'react';
import Navbar from "@/components/adminComponents/Navbar";
import Sidebar from "@/components/adminComponents/Sidebar";
import { ToastContainer, toast } from 'react-toastify';

export default async function Layout({ children }) {
  return (
    <>
      <div className="flex">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />

        <Navbar />
        <Sidebar />
        {children}
      </div>
    </>
  );
};