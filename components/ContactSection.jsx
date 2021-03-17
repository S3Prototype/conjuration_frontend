import pfStyles from '../styles/PortfolioSection.module.css'
import Link from 'next/link'

function ContactSection({phoneNumber}) {
    return (
        <div className="section_container">
            <section className={pfStyles.portfolio_section}>
                    <span className={pfStyles.headline}>
                        Grab a hold of us and get your quote right now!                        
                    </span>
                    <span className={pfStyles.description}>
                        Your project is our priority, <a href='mailto:shaquil@conjuration.net'>so toss us an email by clicking here</a>, or you can email <strong>shaquil@conjuration</strong>.net, or hop into a call with us right now!
                    </span>
                    <button className={pfStyles.contact_button}>
                        Call {phoneNumber}
                    </button>
                    <a href='mailto:shaquil@conjuration.net' className={pfStyles.email_link}>
                        Send Us An Email (shaquil@conjuration.net)
                    </a>
            </section>
        </div>
    )
}

export default ContactSection
