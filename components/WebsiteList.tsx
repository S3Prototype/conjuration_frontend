import FeaturedProject from './FeaturedProject'
import listStyles from '../styles/PortfolioList.module.css'
function WebsiteList() {
    return (        
        <section id="website_portfolio" className={listStyles.portfolio_section}>
                <span className={listStyles.item_name}>Featured <strong>Websites</strong></span>
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
