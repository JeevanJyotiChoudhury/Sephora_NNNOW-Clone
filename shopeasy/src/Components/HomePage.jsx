import React from "react";
import SpecialOffer from "./HomePageComponents/SpecialOffer";
import Topslider from "./HomePageComponents/Top_slider";
import special_offer_data from "../db.json";
import customer_test_prod_data from "../db.json";
import ExtraDiscount from "./HomePageComponents/ExtraDiscount";
import BigBeautyProd from "./HomePageComponents/BigBeautyProd";
import PriceStoreSlider from "./HomePageComponents/PriceStoreSlider";
import BankSlider from "./HomePageComponents/BankSlider";
import HotProducts from "./HomePageComponents/HotProducts";
import MoreOffersProd from "./HomePageComponents/MoreOffersProd";
import CustomerTestimonials from "./HomePageComponents/CustomerTestimonials";
import BacktoTop from "./HomePageComponents/BacktoTop";

const HomePage = () => {
  return (
    <div>
      <Topslider />
      <ExtraDiscount data={special_offer_data.special_category} />
      <SpecialOffer data={special_offer_data.botw} />
      <SpecialOffer data={special_offer_data.spring} />
      <BigBeautyProd data={special_offer_data.botw_brands} />
      <SpecialOffer data={special_offer_data.beauty_pass} />
      <SpecialOffer data={special_offer_data.spring_essentials} />
      <BigBeautyProd data={special_offer_data.spring_essentials_data} />
      <SpecialOffer data={special_offer_data.fav_brands} />
      <ExtraDiscount data={special_offer_data.fav_brands_data} />
      <SpecialOffer data={special_offer_data.new_on_the_block} />
      <MoreOffersProd />
    </div>
  );
};

export default HomePage;
