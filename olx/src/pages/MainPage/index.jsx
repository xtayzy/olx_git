import styles from "./style.module.css"
import {HeaderComponent} from "../../Components/Header/index.jsx";
import {AdvertisementsComponent} from "../../Components/Advertisements/index.jsx";

export const MainPage = () => {
    return (
        <div className={styles.main}>
            <HeaderComponent/>
            <AdvertisementsComponent/>
        </div>
    )
}