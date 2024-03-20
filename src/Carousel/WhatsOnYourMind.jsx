import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Burger from "../img/Burger.avif";
import Biryani_2 from "../img/Biryani_2.avif";
import Cakes from "../img/Cakes.avif";
import Chinese from "../img/Chinese.avif";
import Chole_Bature from "../img/Chole_Bature.avif";
import Coffee from "../img/Coffee.avif";
import Dosa from "../img/Dosa.avif";
import Kachori from "../img/Kachori.avif";
import Momos from "../img/Momos.avif";
import Noodles from "../img/Noodles.avif";
import Pakodas from "../img/Pakodas.avif";
import Pasta from "../img/Pasta.avif";
import Pastry from "../img/Pastry.avif";
import Pav_Bhaji from "../img/Pav_Bhaji.avif";
import Pizza from "../img/Pizza.avif";
import Rolls from "../img/Rolls.avif";
import Samosas from "../img/Samosas.avif";
import Sandwich from "../img/Sandwich.avif";
import Shawarma from "../img/Shawarma.avif";
import Vada from "../img/Vada.avif";







const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 8,
    slidesToSlide: 6 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  }
};

const WhatsOnYourMind = (props) => {
  return (
    <>
      <div className="mt-8"></div>
      <span
        className="w-full text-left pb-6 px-6 mt-10 md:mt-28 font-black text-2xl tracking-tight md:ml-36 "
        style={{ wordSpacing: 3.5 }}
      >
        What's on your mind?
      </span>

      <div style={{ height: '180px', width: '1220px' }} className="mx-auto">
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={false}
          responsive={responsive}
          ssr={true}
          infinite={false}
          autoPlay={props.deviceType !== "mobile" ? false : false}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          deviceType={props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          <div><img src={Burger} alt="" /></div>
          <div><img src={Biryani_2} alt="" /></div>
          <div><img src={Cakes} alt="" /></div>
          <div><img src={Chinese} alt="" /></div>
          <div><img src={Chole_Bature} alt="" /></div>
          <div><img src={Coffee} alt="" /></div>
          <div><img src={Dosa} alt="" /></div>
          <div><img src={Kachori} alt="" /></div>
          <div><img src={Momos} alt="" /></div>
          <div><img src={Noodles} alt="" /></div>
          <div><img src={Pakodas} alt="" /></div>
          <div><img src={Pasta} alt="" /></div>
          <div><img src={Pastry} alt="" /></div>
          <div><img src={Pav_Bhaji} alt="" /></div>
          <div><img src={Pizza} alt="" /></div>
          <div><img src={Rolls} alt="" /></div>
          <div><img src={Samosas} alt="" /></div>
          <div><img src={Sandwich} alt="" /></div>
          <div><img src={Shawarma} alt="" /></div>
          <div><img src={Vada} alt="" /></div>
        </Carousel>
      </div>
    </>
  );
}

export default WhatsOnYourMind;
