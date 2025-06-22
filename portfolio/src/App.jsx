import About from "./sections/About";
import Hero from "./sections/Hero";
import NavBar from "./sections/NavBar";
import Projects from "./sections/Projects";

export default function App() {
    return (
      <main className="max-w-7xl mx-auto text-white">
        <NavBar/>
        <Hero/>
        {/* <About/> */}
        <Projects/>
      </main>
    )
};
