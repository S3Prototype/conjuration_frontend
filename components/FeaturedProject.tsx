import projStyles from '../styles/FeaturedProject.module.css'

function FeaturedProject({
    projectName,
    image,
    url
}) {
    return (
        // <div className={projStyles.project_container}>
            <a href={url} className={projStyles.anchor}>
                <span className={projStyles.project_name}>{projectName}</span>
                <img className={projStyles.project_image} src={image} />
            </a>
        // </div>
    )
}

export default FeaturedProject
