import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

const Loading = () => { 
    return (
      <>
        <Navbar />
        <div className="flex max-h-screen">
          <Sidebar />
          <main className="flex-1 mt-16 m-4 pt-16 md:ml-64 bg-[var(--color-base)] rounded-3xl">
            <h1 className="text-3xl text-center text-red-600 font-bold">
              404 - Page Not Found
            </h1>
            <p className="text-lg text-center text-gray-500">
              The page you are looking for does not exist.
            </p>
          </main>
        </div>
      </>
    );
}

export default Loading;