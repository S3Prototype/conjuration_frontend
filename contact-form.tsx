import cfStyles from '../styles/ContactForm.module.css'

// function sendEmail(e):void{
//     e.preventDefault()
//     const {elements} = e.target
//     console.log(elements)
//     fetch('/api/form-handler',{
//         method: 'POST',
//         headers:{
//             'Content-Type':'application/json',
//         },
//         body:JSON.stringify({
//             name: elements.name.value,
//             email: elements.email.value,
//             company: elements.company.value,
//             job: elements.job.value
//         }),        
//     })
//     .then(_=>console.log(_))
// }

function ContactForm() {
    return (
        <iframe className={cfStyles.form_frame} src="https://us1.list-manage.com/contact-form?u=2b4ce3a6f45c89e5c5c8ad199&form_id=73c61acbfff7a1868b693613e29e2e12">

        </iframe>
        // <main className={cfStyles.form_container}>
        //     <form onSubmit={sendEmail}
        //         method="POST"
        //         name="EmailForm"
        //     >
        //         <label htmlFor="name">Name:</label>
        //         <input required type="text" id="name" placeholder="Your Name Here"/>

        //         <label htmlFor="email">Email Address:</label>
        //         <input required type="text" id="email" placeholder="Your Email Here"/>

        //         <label htmlFor="company">Company Name</label>
        //         <input type="text" id="company" placeholder="Company Name Here (Optional)"/>

        //         <label htmlFor="job">What can we do for you?</label>
        //         <textarea required id="job" placeholder="Briefly describe the service you'd like from us."/>

        //         <button>Submit</button>
        //     </form>
        // </main>
    )
}

export default ContactForm
