import Link from "next/link";

const Navbar = () => { 
    return (
        <nav className="fixed h-14 w-full md:px-4 px-2 flex items-center justify-between bg-gray-200">
            <div className="container mx-auto flex justify-between items-center h-full">
                <Link href="/admin" className="md:text-2xl text-md font-bold text-gray-800">Admin</Link>
                
            </div>
        </nav>
    )
}

export default Navbar;