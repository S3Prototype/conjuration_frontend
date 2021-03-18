import landingStyles from '../styles/LandingSection.module.css'
import cx from 'classnames'
import CallButton from '../components/CallButton.tsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons'

const landingClasses = [
    landingStyles.full_section,
    landingStyles.bg
]



function goToContactForm(e){
    e.preventDefault()
    window.open("https://us1.list-manage.com/contact-form?u=2b4ce3a6f45c89e5c5c8ad199&form_id=73c61acbfff7a1868b693613e29e2e12")
}

function LandingSection() {
    
    function scrollDown(){
        document.querySelectorAll('.section_container')[0].scrollIntoView({block: 'start', behavior: 'smooth'})
    }

    return (
        <section className={cx(landingStyles.full_section, landingStyles.bg)}>
            <div className={landingStyles.info_container}>
                <span className={landingStyles.headline}>
                    Make your web presence Elite.
                </span>
                <div className={landingStyles.description}>
                    <span className={landingStyles.hook}>In just 10 minutes, you'll be on your way to having an elite website.</span>
                    <span className={landingStyles.pitch}>
                        Whether it's a landing page to gather leads for your business, a Wordpress website to explain your services to clients, or a Shopify store to sell your products to customers, Conjuration Web Services is the high-end website designer for you. Jump on a 10-minute call right now to get a price quote!
                    </span>
                </div>
                <div className={landingStyles.contact_buttons}>
                    <CallButton className={landingStyles.contact_button} phoneNumber="973-914-7775"/>
                    <button onClick={goToContactForm} className={landingStyles.contact_button}>Get A Quote</button>
                </div>                    
                <span className={landingStyles.headline}>See Our Services</span>
                <FontAwesomeIcon onClick={scrollDown} icon={faChevronCircleDown} className={landingStyles.icon}/>
                <br />
            </div>
        </section>
    )
}

export default LandingSection
