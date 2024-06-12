import style from './Presentation.module.css'
import ButtonA from '../elements/ButtonA'
import ButtonB from '../elements/ButtonB'

function Presentation() {
    return (
        <div className={style.presentation} id='Presentation'>
            <h4><strong>Bem-Vindo ao meu Portfólio</strong></h4>
            <h1>Olá, eu sou Lucas</h1>
            <p> Estou no 6° periodo do curso Ciência da Computação e curso Formação em Tecnologia <br/>
                na Escola DNC, com foco em desenvolvimento Web. Tenho um objetivo bem claro de <br/>
                me tornar um desenvolvedor fullstack.Ao longo da minha jornada, pude criar projetos <br/>
                de landing page com formularios integrados,fazendo uso das ferramentas html, css e <br/> 
                javaScript. Ademais, faço uso frequente de Git e Github.Além disso, pude concluir alguns cursos,<br/>
                como: Pacotes office - Esxpert cursos, AI-900 - (Inteligência Artificial) - Senai Faculdade Reges</p>

                <ButtonA link='https://github.com/Lucasciel' text='Conecte-se comigo!!'/>
                
                
            </div>
    )
}

export default Presentation 