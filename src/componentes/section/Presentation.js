import style from './Presentation.module.css'
import ButtonA from '../elements/ButtonA'
import {useState, useEffect} from 'react'

function Presentation() {
    const [text, setText] = useState(''); //texto que será escrito
    const toRotate = ['Lucas Souza!', 'Desenvolvedor Front End']; //index 0 e 1, a length é 2
    const [loop, setLoop] = useState(0);
    const [isDeliting, setIsDeliting] = useState(false);//vai ser usado no if
    const period = 100;
    const [delta, setDelta] = useState(100);

    useEffect(()=> {

        let ticker = setInterval(() => {
            toType()
        },delta)
        return()=> {clearInterval(ticker)}

    },[text]) //sempre que texto for modificado, ticker aciona

    const toType = () => {
        let i = loop % toRotate.length;
        
        let fullText = toRotate[i]
        let updatedText = isDeliting ? fullText.substring(0,text.length-1) : fullText.substring(0,text.length+1)

        setText(updatedText); //valor do text

        if(!isDeliting && updatedText === fullText) {
            setIsDeliting(true);
            setDelta(period);
        } else if(isDeliting && updatedText === ''){
            setIsDeliting(false);
            setDelta(period);
            setLoop(loop+1);
        }
    }   




    return (
        <div className={style.presentation} id='Presentation'>
            <h4><strong>Bem-Vindo ao meu Portfólio</strong></h4>
            <h1>Olá, eu sou {text}</h1>
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