import Sidebar from "@/components/adminComponents/Sidebar";

export default async function Layout({ children }) {
  return (
    <>
      <Sidebar />
      {children}
    </>
  )
};