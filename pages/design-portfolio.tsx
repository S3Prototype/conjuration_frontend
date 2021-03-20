import ContactSection from '../components/ContactSection'
import WebAppList from '../components/WebAppList'
import WebsiteList from '../components/WebsiteList'

function DesignPortfolio() {
    return (
        <main>            
            <WebsiteList />
            <WebAppList />
            <ContactSection phoneNumber="973-914-7775" />
        </main>
    )
}

export default DesignPortfolio
