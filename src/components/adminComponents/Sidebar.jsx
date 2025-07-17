import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="hidden md:block fixed top-14 left-0 md:w-60 w-auto text-gray-900 p-4 z-40 bg-gray-200 m-4 rounded-lg" style={{height: 'calc(100vh - 56px - 2rem)'}}>
      <nav className="flex flex-col gap-4 p-6">
        <h2 className="text-2xl text-gray-600 font-bold">Main Menu</h2>
        <Link
          href="/admin/addProduct"
          className="text-gray-600 hover:bg-orange-500 hover:text-gray-100 p-2 rounded"
        >
          Add Product
        </Link>
        <Link
          href="#"
          className="text-gray-600 hover:bg-orange-500 hover:text-gray-100 p-2 rounded"
        >
          Blog List
        </Link>
      </nav>
    </aside>
  );
}

export default Sidebar