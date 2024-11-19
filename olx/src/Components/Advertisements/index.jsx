import styles from './style.module.css';
import {useDispatch, useSelector} from "react-redux";
import {fetchAdvertisements} from "../../redux/slice/advertisement.js";
import {useEffect} from "react";
import {AdvertisementComponent} from "../Advertisement/index.jsx";

export const AdvertisementsComponent = () => {
    const advertisements = useSelector((state) => state.advertisement.advertisements);
    const dispatch = useDispatch();

    useEffect(() => {
        // Вызываем fetchAdvertisements при загрузке компонента
        fetchAdvertisements(dispatch);
    }, [dispatch]);

    console.log(advertisements)

    if (!advertisements || advertisements.length === 0) {
        return <p>No advertisements available.</p>;
    }

    return (
        <div className={styles.advertisements}>
            {advertisements.map((advertisement) => (
                <AdvertisementComponent key={advertisement.id} advertisement={advertisement} />
            ))}
        </div>
    );
}
