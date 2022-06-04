import Footer from '../modules/Footer'
import Header from '../modules/Header'
import styles from './LayoutGral.module.css'

const LayoutGral = ({children}) => {

    return (
        <div className={styles.layoutCont}>
            <Header/>
            {
                children
            }
            <Footer/>
        </div>
    )
}

export default LayoutGral