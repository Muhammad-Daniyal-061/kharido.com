import { Button } from "./CompnentsStore";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import Image from "../assets/pictures/poloBlue.jpg";
import kameezShalwar from "../assets/kameezShalwar/kameezShalwar.jpg";
import eventWearing from "../assets/eventWearing/eventWearing.jpg";
import Sneaker from "../assets/sneaker/sneaker.jpg";
import Jean from "../assets/jean/jean.jpg";
import OfficialShirts from "../assets/officialShirt/officialShirt.jpg";
import { useState, useRef } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./productDisplayBlock.css"




function ProductDisplayBlock() {
  const sliderRef = useRef(null);

  const kameerShalwar = [
    {
      title: "Classic Polo Shirt",
      price: 54,
      image: kameezShalwar,
    },
    {
      title: "Modern Fit Polo",
      price: 434,
      image: kameezShalwar,
    },
    {
      title: "Casual Polo",
      price: 54,
      image: kameezShalwar,
    },
    {
      title: "Casual Polo",
      price: 20,
      image: kameezShalwar,
    },
    {
      title: "Casual Polo",
      price: 20,
      image: kameezShalwar,
    },
    {
      title: "Casual Polo",
      price: 20,
      image: kameezShalwar,
    },
    {
      title: "Casual Polo",
      price: 20,
      image: kameezShalwar,
    },
    {
      title: "Casual Polo",
      price: 20,
      image: kameezShalwar,
    },
    {
      title: "Casual Polo",
      price: 20,
      image: kameezShalwar,
    },
    {
      title: "Casual Polo",
      price: 20,
      image: kameezShalwar,
    },
    {
      title: "Casual Polo",
      price: 20,
      image: kameezShalwar,
    },
    {
      title: "Casual Polo",
      price: 20,
      image: kameezShalwar,
    },
    {
      title: "Casual Polo",
      price: 20,
      image: kameezShalwar,
    },
    {
      title: "Casual Polo",
      price: 20,
      image: kameezShalwar,
    },
    {
      title: "Casual Polo",
      price: 20,
      image: kameezShalwar,
    },
  ];
  const watches = [
    {
      title: "Classic Leather Watch",
      price: 120,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
    },
    {
      title: "Minimalist Silver Watch",
      price: 150,
      image:
        "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=500",
    },
    {
      title: "Sporty Digital Watch",
      price: 90,
      image:
        "https://images.unsplash.com/photo-1518544801958-efcbf8a7ec10?w=500",
    },
    {
      title: "Luxury Gold Watch",
      price: 250,
      image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=500",
    },
    {
      title: "Luxury Gold Watch",
      price: 250,
      image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=500",
    },
    {
      title: "Luxury Gold Watch",
      price: 250,
      image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=500",
    },
    {
      title: "Luxury Gold Watch",
      price: 250,
      image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=500",
    },
    {
      title: "Luxury Gold Watch",
      price: 250,
      image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=500",
    },
    {
      title: "Luxury Gold Watch",
      price: 250,
      image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=500",
    },
    {
      title: "Luxury Gold Watch",
      price: 250,
      image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=500",
    },
  ];

  const eventwearing = [
    {
      title: "Classic  ",
      price: 120,
      image: eventWearing,
    },
    {
      title: "Minimalist  ",
      price: 150,
      image: eventWearing,
    },
    {
      title: " royal ",
      price: 90,
      image: eventWearing,
    },
    {
      title: "Luxury ",
      price: 250,
      image: eventWearing,
    },
    {
      title: "Luxury ",
      price: 250,
      image: eventWearing,
    },
    {
      title: "Luxury ",
      price: 250,
      image: eventWearing,
    },
    {
      title: "Luxury",
      price: 250,
      image: eventWearing,
    },
    {
      title: "Luxury",
      price: 250,
      image: eventWearing,
    },
    {
      title: "Luxury",
      price: 250,
      image: eventWearing,
    },
    {
      title: "Luxury",
      price: 250,
      image: eventWearing,
    },
  ];

  const sneakers = [
    {
      title: "Classic Leather ",
      price: 120,
      image: Sneaker,
    },
    {
      title: "Minimalist  ",
      price: 150,
      image: Sneaker,
    },
    {
      title: "Sporty  ",
      price: 90,
      image: Sneaker,
    },
    {
      title: "Luxury  ",
      price: 250,
      image: Sneaker,
    },
    {
      title: "Luxury  ",
      price: 250,
      image: Sneaker,
    },
    {
      title: "Luxury  ",
      price: 250,
      image: Sneaker,
    },
    {
      title: "Luxury  ",
      price: 250,
      image: Sneaker,
    },
    {
      title: "Luxury  ",
      price: 250,
      image: Sneaker,
    },
    {
      title: "Luxury Gold ",
      price: 250,
      image: Sneaker,
    },
    {
      title: "Luxury Gold ",
      price: 250,
      image: Sneaker,
    },
  ];

  const jeans = [
    {
      title: "Classic Leather ",
      price: 120,
      image: Jean,
    },
    {
      title: "Minimalist  ",
      price: 150,
      image: Jean,
    },
    {
      title: "Sporty  ",
      price: 90,
      image: Jean,
    },
    {
      title: "Luxury  ",
      price: 250,
      image: Jean,
    },
    {
      title: "Luxury  ",
      price: 250,
      image: Jean,
    },
    {
      title: "Luxury  ",
      price: 250,
      image: Jean,
    },
    {
      title: "Luxury  ",
      price: 250,
      image: Jean,
    },
    {
      title: "Luxury  ",
      price: 250,
      image: Jean,
    },
    {
      title: "Luxury  ",
      price: 250,
      image: Jean,
    },
    {
      title: "Luxury  ",
      price: 250,
      image: Jean,
    },
  ];

  const officialShirts = [
    {
      title: "Classic Leather Watch",
      price: 120,
      image: OfficialShirts,
    },
    {
      title: "Minimalist Silver Watch",
      price: 150,
      image: OfficialShirts,
    },
    {
      title: "Sporty Digital Watch",
      price: 90,
      image: OfficialShirts,
    },
    {
      title: "Luxury Gold Watch",
      price: 250,
      image: OfficialShirts,
    },
    {
      title: "Luxury Gold Watch",
      price: 250,
      image: OfficialShirts,
    },
    {
      title: "Luxury Gold Watch",
      price: 250,
      image: OfficialShirts,
    },
    {
      title: "Luxury Gold Watch",
      price: 250,
      image: OfficialShirts,
    },
    {
      title: "Luxury Gold Watch",
      price: 250,
      image: OfficialShirts,
    },
    {
      title: "Luxury Gold Watch",
      price: 250,
      image: OfficialShirts,
    },
    {
      title: "Luxury Gold Watch",
      price: 250,
      image: OfficialShirts,
    },
  ];

  
  const slideNext = () => {
    if (sliderRef.current) {
      const width = sliderRef.current.clientWidth;
      sliderRef.current.scrollLeft += width;
    }
  };
  const productSlider = () => {
    if(sliderRef.current){
     const width = sliderRef.current.clientWidth;
      sliderRef.current.scrollLeft -= width;
      }
  };

  const Products = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    image: Image,
    title: "Polo Shirts" + i,
    price: Math.floor(Math.random() * 100) + 1,
  }));

  return (
    <>  
      {/* polo shirts */}
      <div className="min-h-[500px] pt-12 pb-4 flex items-center flex-col w-full h-auto  relative">
        <div className="text-4xl font-bold text-blue-950 mb-8 capitalize">All Products</div>
        <div className="text-3xl mb-4 capitalize text-blue-950 font-medium "> polo shirts </div>
        <ArrowBackwardIosIcon
          className="absolute left-8 top-1/2 -translate-y-1/2 z-10    bg-amber-50 scale-200 rounded-full p-1 cursor-pointer"
          onClick={productSlider}
        />
        <div
          ref={sliderRef}
          className="flex relative  flex-row gap-2 m-2  overflow-x-auto hide-scrollbar  scroll-smooth  w-full px-4"
        >
          {Products.map((item, index) => (
            <div className=" relative flex-shrink-0" key={index}>
              <Card
                image={item.image}
                title={item.title}
                price={item.price}
                key={index}
              />
            </div>
          ))}
        </div>
        <ArrowForwardIosIcon
          className="absolute right-8 top-1/2 -translate-y-1/2 z-10  bg-amber-50 scale-200 rounded-full p-1 cursor-pointer"
          onClick={slideNext}
        />
        <div className="mt-3">
          <Link to="/poloshirts">
            <Button props="visit" />
          </Link>
        </div>
      </div>

      {/* kameerShalwar */}
      <div className="min-h-[500px] pt-4 pb-4 flex justify-between items-center flex-col w-full">
        <div className="text-3xl capitalize text-blue-950 font-medium ">kameez shalwar </div>
        <div className="flex  overflow-x-scroll gap-2 w-full  ">
          {kameerShalwar.map((item, index) => (
            <div className="" key={index}>
              <Card
                title={item.title}
                price={item.price}
                image={item.image}
                key={index}
              />
            </div>
          ))}
        </div>
        <Link to="/kameezshalwar">
            <Button props="visit" />
          </Link>
      </div>

      {/* watches */}
      <div className="min-h-[500px] pt-12 pb-4 flex justify-between items-center flex-col w-full">
        <div className="text-3xl text-blue-950 font-medium capitalize"> watches </div>
        <div className="flex justify-center items-center overflow-x-scroll w-full ">
          {watches.map((item, index) => (
            <div key={index}>
              <Card
                key={index}
                title={item.title}
                price={item.price}
                image={item.image}
              />
            </div>
          ))}
        </div>
        <Link to="/watches">
            <Button props="visit" />
          </Link>
      </div>

      {/* eventwearing */}
      <div className="min-h-[500px] pt-12 pb-4 flex justify-between items-center flex-col  w-full">
        <div className="text-3xl text-blue-950 font-medium capitalize"> event wearings</div>
        <div className="flex overflow-x-scroll gap-2 w-full">
          {eventwearing.map((item, index) => (
            <div className=" w-full" key={index}>
              <Card
                key={index}
                title={item.title}
                price={item.price}
                image={item.image}
              />
            </div>
          ))}
        </div>
        <Link to="/eventwearings">
            <Button props="visit" />
          </Link>
      </div>

      {/* sneakers */}
      <div className="min-h-[500px] pt-12 pb-4 flex justify-between items-center flex-col w-full">
        <div className="text-3xl text-blue-950 font-medium capitalize">sneakers</div>
        <div className="flex overflow-x-scroll w-full">
          {sneakers.map((item, index) => (
            <div key={index}>
              <Card
                key={index}
                title={item.title}
                image={item.image}
                price={item.price}
              />
            </div>
          ))}
        </div>
       <Link to="/sneakers">
            <Button props="visit" />
          </Link>
      </div>

      {/* jeans */}
      <div className="min-h-[500px] pt-12 pb-4 flex justify-between items-center flex-col w-full">
        <div className="text-3xl text-blue-950 font-medium capitalize">jeans </div>
        <div className="flex overflow-x-scroll w-full">
          {jeans.map((item, index) => (
            <div key={index}>
              <Card
                key={index}
                title={item.title}
                image={item.image}
                price={item.price}
              />
            </div>
          ))}
        </div>
        <Link to="/jeans">
            <Button props="visit" />
          </Link>
      </div>

      {/* official shirts */}
      <div className="min-h-[500px] pt-12 pb-4 flex justify-between items-center flex-col w-full">
        <div className="text-3xl text-blue-950 font-medium capitalize">official shirts </div>
        <div className="flex overflow-x-scroll w-full">
          {officialShirts.map((item, index) => (
            <div key={index}>
              <Card
                key={index}
                title={item.title}
                image={item.image}
                price={item.price}
              />
            </div>
          ))}
        </div>
        <Link to="/officialshirts">
            <Button props="visit" />
          </Link>
      </div>
    </>
  );
}

export default ProductDisplayBlock;
