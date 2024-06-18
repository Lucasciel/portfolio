import styles from './Card.module.css'
import ButtonB from './ButtonB.js'
import {useState} from 'react'



function Card({img, title, tech, description, repo, site}) {

    const [info, setInfo] = useState(false)

    function infoOn() {
        setInfo(true)
    }
    function infoOf() {
        setInfo(false)
    }

    return (
        <div onMouseLeave={infoOf} className={styles.card}>
            <a onMouseEnter={infoOn} target='blank' href={site}>
                <img alt='erro' src={img}/>
            </a>

            {info === true && (
                <section>
                <h3>{title}</h3>
                <p><strong>Tecnologias:{tech}</strong></p>
                <p>{description}</p>
                <ButtonB text='Acesse o repositório' link={repo}/>
            </section>

            )}
            
        </div>
    )
}

export default Card