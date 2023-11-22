function Search() {
    
    return (
        <div className="my-5 flex flex-col items-center justify-center gap-5 w-[80vw] mx-auto">
            <input 
                className="block w-full border py-4 px-4 bg-transparent text-white"
                placeholder="Search for crypto"
            />
        </div>
    );
}

export default Search;