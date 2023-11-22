import Banner from "../Components/Banner";
import Navbar from "../Components/Navbar";

function Home() {
    return (
        <div className="min-h-[100vh] flex flex-col justify-start items-center">
           <Navbar /> 
           <Banner />
        </div>
    );
}

export default Home;