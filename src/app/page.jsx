import Headline from "@/components/Headline";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex min-h-screen pt-14">
        <Sidebar />
        <main className="flex-1 m-4 md:ml-68 bg-white rounded-3xl ">
            <div className="grid grid-cols-10 grid-rows-10 gap-4 bg-gray-200">
              <div className="col-span-7 row-span-7">
                <Headline />
              </div>
              <div className="col-span-7 row-span-3 col-start-1 row-start-8">2</div>
              <div className="col-span-3 row-span-10 col-start-8 row-start-1">3</div>
            </div>
        </main>
      </div>
    </>
  );
}
