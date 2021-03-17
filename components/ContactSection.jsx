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
                        Your project is our priority, <Link href='/contact'>so toss us an email by clicking here</Link>, or hop into a call with us right now!
                    </span>
                    <button className={pfStyles.contact_button}>
                        Call {phoneNumber}
                    </button>
                    <button className={pfStyles.contact_button}>
                        Send Us An Email
                    </button>
            </section>
        </div>
    )
}

export default ContactSection
