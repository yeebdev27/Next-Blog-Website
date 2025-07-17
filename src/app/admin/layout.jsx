import Navbar from "@/components/adminComponents/Navbar";
import Sidebar from "@/components/adminComponents/Sidebar";

export default async function Layout({ children }) {
  return (
    <>
      <div className="flex">
        <Navbar />
        <Sidebar />
        {children}
      </div>
    </>
  );
};