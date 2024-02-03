import "./home.css"
import Social from "./Social";
import Data from "./Data"
import ScrollDown from "./ScrollDown";
import { useEffect } from "react";

const Home = () => {
    useEffect(()=>{
        window.scrollTo(0, 0);
      },[])

    return (
        <section className="home section" id="home">
            <div className="home-container container grid">
                <div className="home-content grid">
                    <Social />

                    <div className="home-image"></div>

                    <Data />
                </div>

                <ScrollDown />
            </div>
        </section>
    )
}

export default Home;