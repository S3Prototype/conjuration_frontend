import landingStyles from '../styles/LandingSection.module.css'
import cx from 'classnames'

const landingClasses = [
    landingStyles.full_section,
    landingStyles.bg
]

function LandingSection() {
    return (
            <section className={cx(landingStyles.full_section, landingStyles.bg)}>
                <div className={landingStyles.info_container}>
                    <span className={landingStyles.headline}>
                        Make your web presence Elite.
                    </span>
                    <div className={landingStyles.description}>
                        <span className={landingStyles.hook}>In just 10 minutes, you'll be on your way to having an elite website.</span>
                        <span className={landingStyles.pitch}>
                            Whether it's a landing page to gather leads for your business, a Wordpress website to explain your services to clients, or a Shopify store to sell your products to customers, Conjuration Web Services is the high-end website builder for you. Jump on a 10-minute call right now to get a price quote!
                        </span>
                        <div className={landingStyles.contact_buttons}>
                            <button className={landingStyles.contact_button}>973-914-7775</button>
                            <button className={landingStyles.contact_button}>Get A Quote</button>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default LandingSection
