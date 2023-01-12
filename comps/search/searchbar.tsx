const SearchBar = () => {
    return (
        <div className="flex flex-row w-96 bg-mattblack items-center rounded-md px-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>

            <input type="text" placeholder="Search" className="ml-6  bg-mattblack p-2 text-gray-200 focus:outline-none" />

        </div>
    );
}

export default SearchBar;