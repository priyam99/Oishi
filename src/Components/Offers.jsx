
import { Link } from "react-router-dom";
const Offers = () => {
 
  
    return (
        <>
        <div className="flex justify-between items-center  flex-col lg:px-16 lg:my-10 md:px-16 px-6 my-8 md:my-10 w-full ">
        <img src="https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_156,w_1000/rng/md/carousel/production/54e91b82d0c8111e14fe786bcf28ff1c"></img>
        <div className="flex lg:mt-4 mt-2 md:mt-4 justify-evenly lg:gap-5 gap-2 md:gap-3 items-center flex-row">
          <img
            className="lg:w-52 md:w-40 sm:w-32 w-20"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/mbcjw5tiuemimw1pfjli"
          ></img>
          <img
            className="lg:w-52 md:w-40 sm:w-32 w-20"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/ngjatt8hwriaytmugmqz"
          ></img>
          <img
            className="lg:w-52 md:w-40 sm:w-32 w-20"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/dzm1eo2punmiqd1idyzn"
          ></img>
        </div>
        </div>
        <button className="ml-[600px] text-white font-bold text-[30px] bg-orange-500 rounded-2xl px-4 py-2">
  <Link to="/search" className="text-white no-underline">
    See Nearby Restaurants
  </Link>
</button>
        </>
    );
  };
  export default Offers;
  