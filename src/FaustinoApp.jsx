import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import NoticesAndTournaments from "./pages/NoticesAndTournaments";
import Contact from "./pages/Contact";
import Experience from "./components/Experience";
import { Canvas } from "@react-three/fiber";
import { ReactLenis } from "lenis/react";
import { Suspense } from "react";

function FaustinoApp() {
  return (
    <ReactLenis root>
      <main className="relative w-full min-h-screen overflow-hidden bg-zinc-800">
        <div className="w-full h-screen fixed z-30 overflow-hidden lg:block">
          <Canvas>
            <Suspense fallback={null}>
              <Experience />
            </Suspense>
          </Canvas>
        </div>

        <Home />
        <About />
        <Gallery />
        <NoticesAndTournaments />
        <Contact />
      </main>
    </ReactLenis>
  );
}

export default FaustinoApp;
