import ProfileBlock from "../../components/ ProfileBlock";
import Navbar from "../home/Navbar.jsx";
import ProductsPage from "../products/ProductsPage.jsx";
import Logo from "../../assets/logo.png";
import Banner from "../../components/Banner";
import Footer from "./Footer";
function HomePage() {
  const login = false;

  return (
    <>
      <div className="  relative overflow-hidden">
        <div className="" > 
          <div className="text-2xl h-20  pt-6 text-center pb-3 flex w-full  flex-row-reverse justify-center items-center sticky top-0">
            {login ? (
              <div className="absolute right-0">
                <ProfileBlock />
              </div>
            ) : null}
            <div className=" flex justify-center  items-center gap-4">
              <p className=" relative font-serif text-4xl text-blue-950">
                Men's Wear
                <span className=" absolute top-0 right-0 text-xs ">&copy;</span>
              </p>
              <img
                src={Logo}
                alt=""
                className=" mx-auto h-16 rounded shadow  "
              />
            </div>
          </div>

          <Navbar />
        </div>
        <Banner />
        <ProductsPage />
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
