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
      <SpecialOffer data={special_offer_data.special_offer} />
      <SpecialOffer data={special_offer_data.best_seller} />
      <SpecialOffer data={special_offer_data.iconic_styles} />
      <SpecialOffer data={special_offer_data.coupon_corner} />
      <ExtraDiscount />
      <SpecialOffer data={special_offer_data.flat_off} />
      <SpecialOffer data={special_offer_data.big_beauty} />
      <BigBeautyProd />
      <SpecialOffer data={special_offer_data.price_store} />
      <PriceStoreSlider />
      <BankSlider />
      <SpecialOffer data={special_offer_data.coming_hot} />
      <HotProducts />
      <SpecialOffer data={special_offer_data.uspa} />
      <SpecialOffer data={special_offer_data.ck} />
      <SpecialOffer data={special_offer_data.more_offers} />
      <MoreOffersProd />
      <SpecialOffer data={special_offer_data.customer_test} />
      <CustomerTestimonials data={customer_test_prod_data.customer_test_prod} />
      <SpecialOffer data={special_offer_data.top_brands} />
      <CustomerTestimonials data={customer_test_prod_data.top_brands_prod} />
      <BacktoTop/>
    </div>
  );
};

export default HomePage;
