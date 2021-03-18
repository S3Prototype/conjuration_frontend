import pfStyles from '../styles/PortfolioSection.module.css'

function callNumber(e){
    e.preventDefault()
    window.location.href='tel:9739147775'
}

export default function CallButton({phoneNumber, className}) {
    return (
        <button onClick={callNumber} className={className}>
            Call Now! {phoneNumber}
        </button>      
    )
}