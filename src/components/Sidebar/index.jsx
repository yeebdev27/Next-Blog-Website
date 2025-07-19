const Sidebar = () => {
    return(
        <aside className="hidden md:block fixed top-14 left-0 md:w-60 w-auto text-gray-900 p-4 z-40 bg-white m-4 mb-4 overflow-y-auto rounded-xl" style={{height: 'calc(100vh - 56px - 2rem)'}}>
            <nav className="flex flex-col gap-4 p-6">
                <h2 className="text-2xl text-gray-800 font-bold">Category</h2>
                <a href="#" className="text-gray-600 hover:bg-orange-500 hover:text-gray-100 p-2 rounded">Politics</a>
                <a href="#" className="text-gray-600 hover:bg-orange-500 hover:text-gray-100 p-2 rounded">National</a>
                <a href="#" className="text-gray-600 hover:bg-orange-500 hover:text-gray-100 p-2 rounded">Sport</a>
                <a href="#" className="text-gray-600 hover:bg-orange-500 hover:text-gray-100 p-2 rounded">Technology</a>
                <a href="#" className="text-gray-600 hover:bg-orange-500 hover:text-gray-100 p-2 rounded">Fashion</a>
            </nav>
        </aside>
    )
}

export default Sidebar;