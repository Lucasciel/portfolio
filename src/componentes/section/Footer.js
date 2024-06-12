import styles from './Footer.module.css'
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

function Footer() {
    return (
        <div className={styles.footer}>
            <ul>
                <li><a target='blank' href='https://www.instagram.com/lucas_souza11y/'><FaInstagram size={30}/></a></li>
                <li><a target='blank' href='https://github.com/Lucasciel'><FaGithub size={30}/></a> </li>
                <li><a target='blank' href='https://www.linkedin.com/in/lucas-souza-396444176/'><FaLinkedin size={30}/></a></li>
            </ul>
            <p>lluckaslink@gmail.com</p>
            <p>Lucas Souza © 2024</p>
        </div>
    )
}
export default Footer