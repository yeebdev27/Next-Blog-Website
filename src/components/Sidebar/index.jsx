const Sidebar = () => {
    return(
        <aside className="hidden md:block fixed top-14 left-0 md:w-60 w-auto h-auto text-gray-900 p-4 z-40 bg-gray-200 m-4 rounded-lg">
            <nav className="flex flex-col gap-4 p-6">
                <a href="#" className="text-gray-600 hover:bg-orange-500 hover:text-gray-100 p-2 rounded">Dashboard</a>
                <a href="#" className="text-gray-600 hover:bg-orange-500 hover:text-gray-100 p-2 rounded">Profile</a>
                <a href="#" className="text-gray-600 hover:bg-orange-500 hover:text-gray-100 p-2 rounded">Settings</a>
                <a href="#" className="text-gray-600 hover:bg-orange-500 hover:text-gray-100 p-2 rounded">Logout</a>
            </nav>
        </aside>
    )
}

export default Sidebar;