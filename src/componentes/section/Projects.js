import styles from './Projects.module.css'
import ButtonB from '../elements/ButtonB'
import Card from '../elements/Card'
import projeto1 from '../../image/Projects/projeto1.svg'
import projetoApi from '../../image/Projects/projetoApi.svg'


function Projects() {
    return (
        <div className={styles.Projects} id="Projects">
            <h1>Projetos</h1>
            <Card 
            img={projeto1} 
            title="Projeto Landing Page "
            tech=" HTML, CSS, JS"
            description="Desenvolvimento de uma Landing Page com integração
             de formulário usando o Sheet Monkey"
            repo="https://github.com/Lucasciel/projeto-landing-page "
            site="https://main--projetolandingpagett.netlify.app/"
            />
            <Card 
            img={projetoApi} 
            title="tela funcional com consumo de API"
            tech=" HTML, CSS, JS"
            description="interface de usuário atraente e funcional com vaidação de campos que permitirá 
            obter dados de endereço e previsões meteorológicas"
            repo="https://github.com/Lucasciel/Projeto-API"
            site="https://projeto-api-lucas.netlify.app/"
            />
            <ButtonB text='Acesse o repositório' link='https://github.com/Lucasciel?tab=repositories'/>

        </div>
    )
}

export default Projects