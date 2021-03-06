import FeaturedProject from './FeaturedProject'
import listStyles from '../styles/PortfolioList.module.css'

function WebAppList() {
    return (
        <section id="web_app_portfolio" className={listStyles.portfolio_section}>
                <span className={listStyles.item_name}>Featured <strong>Web Apps</strong></span>
                <FeaturedProject
                    projectName="Buddy Viewer"
                    image="https://res.cloudinary.com/diujqlncs/image/upload/v1616012620/conjuration_frontent/buddyviewer_desktop_l69dmx.jpg"
                    url="https://buddyviewer.com"
                />
                
                <FeaturedProject
                    projectName="NecronomiSearch"
                    image="https://res.cloudinary.com/diujqlncs/image/upload/v1615989603/conjuration_frontent/desktop1_yr0mmw.jpg"
                    url="https://necronomisearch.com"
                />

                <FeaturedProject
                    projectName="OnePush"
                    image="https://res.cloudinary.com/diujqlncs/image/upload/v1617632591/conjuration_frontent/onepush_yvjw2n.png"
                    url="https://onepush.blog"
                />
        </section>
    )
}

export default WebAppList
