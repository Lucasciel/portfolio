import styles from'./Skills.module.css'
import javascript from '../../image/skill/javascript.svg'
import html from '../../image/skill/html.svg'
import css from '../../image/skill/css.svg'
import react from '../../image/skill/react.svg'
import typescript from '../../image/skill/typescript.svg'

function Skills() {
    return (
        <div className={styles.Skills}>
            <h1 id="Skills">Habilidades</h1>
            <p>Conheça um pouco das minhas principais habilidades e conhecimentos.</p>
            <div >
                <img src={javascript}></img>
                <img src={html}></img>
                <img src={css}></img>
                <img src={react}></img>
                <img src={typescript}></img>
            </div>
        </div>
    )

}
export default Skills