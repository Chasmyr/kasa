import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Error from "./pages/Error/Error";
import Logement from "./pages/Logement/Logement";

const Routeur = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />}>
                </Route>
                <Route exact path="/about" element={<About />}>
                </Route>
                <Route exact path="*" element={<Error />}>
                </Route>
                <Route exact path="/logement/*" element={<Error />}>
                </Route>
                <Route exact path="/logement/:logementId" element={<Logement />}>
                </Route>
            </Routes>
        </Router>
    )
}

export default Routeur