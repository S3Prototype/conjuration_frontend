import pfStyles from '../styles/PortfolioSection.module.css'
import Link from 'next/link'
import cfStyles from '../styles/ContactForm.module.css'

function ContactSection({phoneNumber}) {
    return (
        <div className="section_container">
            <section className={pfStyles.portfolio_section}>
                    <span className={pfStyles.headline}>
                        Grab a hold of us and get your quote right now!                        
                    </span>
                    <span className={pfStyles.description}>
                        Your project is our priority, <a className="link" href='https://us1.list-manage.com/contact-form?u=2b4ce3a6f45c89e5c5c8ad199&form_id=73c61acbfff7a1868b693613e29e2e12'>so toss us an email by clicking here</a>, or you can email <strong>shaquil@conjuration</strong>.net, or hop into a call with us right now!
                    </span>
                    <button className={pfStyles.contact_button}>
                        Call {phoneNumber}
                    </button>
                    <a className="link" href='"https://us1.list-manage.com/contact-form?u=2b4ce3a6f45c89e5c5c8ad199&form_id=73c61acbfff7a1868b693613e29e2e12"' className={pfStyles.email_link}>
                        Send Us An Email (shaquil@conjuration.net)
                    </a>

                    <span className={pfStyles.contact}>
                        Conjuration Web Services is located in the New York Tri-State Area, about 20 minutes from New York City.
                    </span>
                    <span className={pfStyles.contact}>
                        311 Redwood Avenue,<br />
                        Paterson, New Jersey,<br />
                        07522<br />
                        CONTACT US:<br />
                        973-914-7775<br />
                    </span>
            </section>
        </div>
    )
}

export default ContactSection
