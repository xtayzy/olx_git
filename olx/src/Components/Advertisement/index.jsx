
import styles from './style.module.css';

export const AdvertisementComponent = ({advertisement}) => {
    return (
        <div className={styles.advertisement}>
            <div>
                <img src={"http://" + advertisement.images[0].image_url} alt=""/>
            </div>
            <div className={styles.des}>
                <div className={styles.title}>
                    {advertisement.title}
                </div>
                <div className={styles.price}>
                    {advertisement.price} денег
                </div>
            </div>
        </div>
    );
}

