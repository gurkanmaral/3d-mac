'use client';

import Navbar from "./components/Navbar.tsx";
import Hero from "./components/Hero.tsx";
import ProductViewer from "./components/ProductViewer.tsx";
import gsap from "gsap";
import {ScrollTrigger,SplitText} from "gsap/all";

gsap.registerPlugin(ScrollTrigger,SplitText);

const App = () => {
    return (
        <main>
            <Navbar />
            <Hero />
            <ProductViewer />
        </main>
    )
}
export default App
