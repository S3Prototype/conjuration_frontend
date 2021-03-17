import pfStyles from "../styles/PortfolioSection.module.css"

function PortfolioSection({
    description,
    portfolioType,
    phoneNumber,
    image
}) {
    return(
        <div className="section_container">
            <section className={pfStyles.portfolio_section}>
                    <span className={pfStyles.headline}>
                        <span className={pfStyles.portfolio_type}>{portfolioType}</span> Portfolio
                    </span>
                    <span className={pfStyles.description}>
                        {description}
                    </span>
                    <button className={pfStyles.contact_button}>
                        Call Now! {phoneNumber}
                    </button>
                    <img src={image}
                    className={pfStyles.preview_image}
                    />
                    <button className={`${pfStyles.contact_button} ${pfStyles.portfolio_button}`}>
                        See Our {portfolioType} Portfolio
                    </button>
            </section>
        </div>
    )
}

export default PortfolioSection