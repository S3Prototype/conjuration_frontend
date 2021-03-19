import pfStyles from "../styles/PortfolioSection.module.css"
import Link from 'next/link'
import CallButton from "./CallButton"
function PortfolioSection({
    description,
    portfolioType,
    phoneNumber,
    image
}) {
    const portfolioRoute: string = portfolioType.replace(/\s/g, '_')+"_portfolio"
    return(
        <div className="section_container">
            <section className={pfStyles.portfolio_section}>
                <span className={pfStyles.headline}>
                    <span className={pfStyles.portfolio_type}>{portfolioType}</span> Portfolio
                </span>
                <span className={pfStyles.description}>
                    {description}
                </span>
                <form className={pfStyles.phone_number} action={`tel:${phoneNumber}`}>
                    <CallButton phoneNumber={phoneNumber} className={pfStyles.contact_button}/>                   
                </form>
                <img src={image}
                className={pfStyles.preview_image}
                />
                <Link href={`/design-portfolio#${portfolioRoute.toLowerCase()}`}>
                    <button className={`${pfStyles.contact_button} ${pfStyles.portfolio_button}`}>
                        See Our {portfolioType} Portfolio
                    </button>
                </Link>
            </section>
        </div>
    )
}

export default PortfolioSection