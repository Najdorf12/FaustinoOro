import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Stats from "./pages/Stats";
import Contact from "./pages/Contact";

import Experience from "./components/Experience";
import { Canvas } from "@react-three/fiber";
import { ReactLenis, useLenis } from "lenis/react";

function FaustinoApp() {
  /*   const lenis = useLenis(({ scroll }) => {
    // called every scroll
  }); */

  return (
    <ReactLenis root>
      <main className="relative w-full min-h-screen overflow-hidden bg-zinc-900">
        <div className="w-full h-screen fixed z-30 overflow-hidden lg:block">
          <Canvas>
            <Experience />
          </Canvas>
        </div>

        <Home />
        <About />
        <Gallery />
        <Stats />
        <Contact />
      </main>
    </ReactLenis>
  );
}

export default FaustinoApp;
