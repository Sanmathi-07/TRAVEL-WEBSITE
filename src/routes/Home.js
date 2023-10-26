import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Trip from "../components/Trip";
function Home (){
    return(
        <>
        <Navbar/>
        <Hero
        cName="hero"
        heroImg="https://img.freepik.com/premium-photo/landscape-car-road-summer-poland-vacation-trip-highway-with-nature-scenery-with-drive-holiday-journey-recreation-motion-ride-europe-transport_250132-798.jpg"
        title="Your Journey Your Story" 
        text="Choose Your Favourite Destination."
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
        />
        <Destination/>
        <Trip/>
        <Footer/>
        </>
    );
}

export default Home;