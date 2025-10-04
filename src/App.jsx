import HomePage from "./pages/home/HomePage.jsx"
import PoloShirts from "./pages/Tshirts/PoloShirts.jsx";
import JeansPage from "./pages/jeans/JeansPage.jsx"
import EventWearingPage from "./pages/eventwearing/EventWearing.jsx"
import SneakersPage from "./pages/sneaker/Sneakers.jsx"
import KameezShalwar from "./pages/kameersharwar/KameezShalwar.jsx"
import WatchesPage from "./pages/watches/Watches.jsx"
import OfficialShirts from "./pages/officeShirts/OfficialShirts.jsx";
import NotFound from "./pages/notFound/NotFound.jsx";
import Products from "./pages/products/ProductsPage.jsx"
import Admin from "./pages/admin/Admin.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";




function App() {
 

  return (
    <>
    <div className=" bg-[#f4f3ee]">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/home" element={<HomePage/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/poloshirts" element={<PoloShirts/>} />
          <Route path="/eventwearings" element={<EventWearingPage/>} />
          <Route path="/sneakers" element={<SneakersPage/>} />
          <Route path="/kameezshalwar" element={<KameezShalwar/>} />
          <Route path="/watches" element={<WatchesPage/>} />
          <Route path="/officialShirts" element={<OfficialShirts/>} />
          <Route path="/Jeans" element={<JeansPage/>} />
          <Route path="*" element={<NotFound/>} />
          <Route path="/admin"  element={<Admin/>} />
        </Routes>
      </Router>
    </div>
    </>
  )
}

export default App

