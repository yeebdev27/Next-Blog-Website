import Link from "next/link";
import { Dumbbell, House, Scale, Shirt } from "lucide-react";

const Navbar = () => { 
    return (
        <nav className="h-14 w-full md:px-4 px-2 flex items-center justify-between bg-gray-200">
            <div className="container mx-auto flex justify-between items-center h-full">
                <Link href="/" className="md:text-2xl text-md font-bold text-gray-800">News</Link>
                <ul className="flex space-x-4">
                    <li>
                         <Link href="/" className="flex items-center space-x-1 md:text-md text-xs font-semibold text-gray-400">
                            <House />
                            <span>Home</span>
                        </Link>
                    </li>
                    <li>
                         <Link href="/" className="flex items-center space-x-1 md:text-md text-xs font-semibold text-gray-400">
                            <Dumbbell />
                            <span>Sport</span>
                        </Link>
                    </li>
                    <li>
                         <Link href="/" className="flex items-center space-x-1 md:text-md text-xs font-semibold text-gray-400">
                            <Shirt />
                            <span>Fashion</span>
                        </Link>
                    </li>
                    <li>
                         <Link href="/" className="flex items-center space-x-1 md:text-md text-xs font-semibold text-gray-400">
                            <Scale />
                            <span>Politics</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;