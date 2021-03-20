import FeaturedProject from './FeaturedProject'
import listStyles from '../styles/PortfolioList.module.css'
function WebsiteList() {
    return (        
        <section id="website_portfolio" className={listStyles.portfolio_section}>
                <span className={listStyles.item_name}>Featured <strong>Websites</strong></span>
                <FeaturedProject
                    projectName="Puppiclown (Shopify Store. Password: debut)"
                    image="https://res.cloudinary.com/diujqlncs/image/upload/v1616195820/conjuration_frontent/puppiclown_c0yemt.png"
                    url="https://puppiclown.myshopify.com/?_ab=0&_bt=eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaEpJaDF3ZFhCd2FXTnNiM2R1TG0xNWMyaHZjR2xtZVM1amIyMEdPZ1pGVkE9PSIsImV4cCI6IjIwMjEtMDMtMTlUMjM6MzM6MjQuNDYzWiIsInB1ciI6InBlcm1hbmVudF9wYXNzd29yZF9ieXBhc3MifX0%3D--875556d78e50bd3f3fcc624595adffa06339208a&_fd=0&_sc=1&key=a13191b277ea48dbdcda8518b20227b3a83d473b4cbff2f06c753201ca708e8d"
                />

                <FeaturedProject
                    projectName="BenjaminAugust.net"
                    image="https://res.cloudinary.com/diujqlncs/image/upload/v1616002363/conjuration_frontent/benjaminaugust_gvhavd.png"
                    url="https://www.benjaminaugust.net"
                />
                
                <FeaturedProject
                    projectName="ShaquilHansford.com"
                    image="https://res.cloudinary.com/diujqlncs/image/upload/v1616017155/conjuration_frontent/shaquilhansford_desktop_nj9htv.jpg"
                    url="https://www.shaquilhansford.com/"
                />
        </section>
    )
}

export default WebsiteList
