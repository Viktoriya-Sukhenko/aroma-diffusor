import Header from "@/components/Header";
import Offer from "@/sections/Offer";
import CallToAction from "@/sections/CallToAction";
import Details from "@/sections/Details";
import WhyUs from "@/sections/WhyUs";
import Assortment from "@/sections/Assortment";
import Characteristics from "@/sections/Characteristics";
import Reviews from "@/sections/Reviews";
import Callback from "@/sections/Callback";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Offer />
      <CallToAction />
      <Details />
      <WhyUs />
      <Assortment />
      <Characteristics />
      <Reviews />
      <div className="callbackWrapper"> {/* ✅ Обгортаємо Callback + Footer */}
        <Callback />
        <Footer />
      </div>
    </>
  );
}
