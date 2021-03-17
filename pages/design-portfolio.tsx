import ContactSection from '../components/ContactSection'
import WebAppList from '../components/WebAppList.tsx'
import WebsiteList from '../components/WebsiteList.tsx'

function DesignPortfolio() {
    return (
        <main>            
            <WebAppList />
            <WebsiteList />
            <ContactSection phoneNumber="973-914-7775" />
        </main>
    )
}

export default DesignPortfolio
