import Plans from "../plan/Plans";
import AnyDevice from "./AnyDevice";
import Enjoy from "./Enjoy";
import Header from "./Header";
import MoviseAll from "./MoviseAll";
import Slider from "./Slider";
import Plan from "./Subscribe";

function Home() {
    return ( 
        <>
        <Header />
        <Slider />
        <Enjoy />
        <MoviseAll />
        <AnyDevice />
        <Plan />
        </>
     );
}

export default Home;