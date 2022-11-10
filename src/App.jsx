import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Collections from "./components/router-components/Collections";
import About from "./components/router-components/About";
import Contact from "./components/router-components/Contact";
import Men from "./components/router-components/Men";
import Women from "./components/router-components/Women";
import Home from "./components/Home";

function App() {
    return (
        <BrowserRouter>
            <div className="overflow-hidden min-h-screen relative">
                <Header />

                <Routes>
                    <Route element={<Home />} path="/" />
                    <Route element={<Collections />} path="/collection" />
                    <Route element={<About />} path="/about" />
                    <Route element={<Contact />} path="/contact" />
                    <Route element={<Men />} path="/men" />
                    <Route element={<Women />} path="/women" />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
