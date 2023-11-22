import Banner from "../Components/Banner";
import CryptoTable from "../Components/CryptoTable";
import Navbar from "../Components/Navbar";
import Search from "../Components/Search";

function Home() {
    return (
        <div className="min-h-[100vh] flex flex-col justify-start items-center">
           <Navbar /> 
           <Banner />
           <div className="text-5xl font-semibold text-white my-4">
                Cryptocurrency prices
           </div>
           <Search />
           <CryptoTable />
        </div>
    );
}

export default Home;