import Head from 'next/head'
import LandingSection from '../components/LandingSection'
import PortfolioSection from '../components/PortfolioSection.tsx'
import ContactSection from '../components/ContactSection'
export default function Home() {
  return (
    <>
      <LandingSection />

      <PortfolioSection 
          description={"You have modern problems -- we have modern solutions. Web Applications are websites that work just like apps. You load them in your browser by visiting url's, like a website; but they provide all the modern functionality of a desktop or mobile app. Hop into a 10-minute call with us right now to get started on building your dream Web App."}
          portfolioType={"Web App"}
          phoneNumber={"973-914-7775"}
          image={"https://res.cloudinary.com/diujqlncs/image/upload/v1615989603/conjuration_frontent/desktop1_yr0mmw.jpg"}
      />
      
      <PortfolioSection 
          description={`You want a professional, high-end website, because you want your customers to respect your brand. We provide custom-made, professional Shopify storefronts, Wordpress sites and lead-generating Landing pages that will make your small business look like a Fortune 500 Company.`}
          portfolioType={"Website"}
          phoneNumber={"973-914-7775"}
          image={"https://res.cloudinary.com/diujqlncs/image/upload/v1616002363/conjuration_frontent/benjaminaugust_gvhavd.png"}
      />

      {/* <PortfolioSection 
          description={`You already have a killer product idea; now you need an aesthetic that shows off your values and gets you sales. Your brand will live or die based on the way you package your product. Don't leave it in amateur hands. We offer professional Graphic Design services, including Logos, Flyers, Covers, Business Cards, and more.`}
          portfolioType={"Graphic Design"}
          phoneNumber={"973-914-7775"}
          image={"https://res.cloudinary.com/diujqlncs/image/upload/v1616004081/conjuration_frontent/IMG_20180117_091856_709_uueinf.jpg"}
      /> */}

      <ContactSection phoneNumber={"973-914-7775"}/>

    </>
  )
}
