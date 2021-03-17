import landingStyles from '../styles/LandingSection.module.css'

const landingClasses = [
    landingStyles.full_section
]

function LandingSection() {
    return (
        <>
            <section className={landingClasses}>
                <div className={landingStyles.info_container}>
                    <span className={landingStyles.hook}>
                        Make your web presence Elite.
                    </span>
                    {/* <div className={landingStyles.info}>
                        Test info
                    </div> */}
                </div>
            </section>
        </>
    )
}

export default LandingSection
