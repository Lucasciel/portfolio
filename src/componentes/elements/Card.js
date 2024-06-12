import styles from './Card.module.css'
import ButtonB from './ButtonB.js'



function Card({img, title, tech, description, repo, site}) {
    return (
        <div className={styles.card}>
            <a target='blank' href={site}>
                <img alt='erro' src={img}/>
            </a>
            <section>
                <h3>{title}</h3>
                <p><strong>Tecnologias:{tech}</strong></p>
                <p>{description}</p>
                <ButtonB text='Acesse o repositório' link={repo}/>

            </section>
        </div>
    )
}

export default Card