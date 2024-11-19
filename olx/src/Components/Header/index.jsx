import styles from "./style.module.css"
import {NavLink} from "react-router-dom";

export const HeaderComponent = () => {
    return (
        <header className={styles.main_block}>
            <nav className={styles.header__links}>
                <NavLink to='/'>
                    <img src="public/logo_2.png" alt=""/>
                </NavLink>
                <div className={styles.urls}>
                    <NavLink to=''>
                        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24"
                             width="20" height="20">
                            <path
                                d="m13.5,12c0,.828-.672,1.5-1.5,1.5s-1.5-.672-1.5-1.5.672-1.5,1.5-1.5,1.5.672,1.5,1.5Zm3.5-1.5c-.828,0-1.5.672-1.5,1.5s.672,1.5,1.5,1.5,1.5-.672,1.5-1.5-.672-1.5-1.5-1.5Zm-10,0c-.828,0-1.5.672-1.5,1.5s.672,1.5,1.5,1.5,1.5-.672,1.5-1.5-.672-1.5-1.5-1.5Zm17,1.84v6.66c0,2.757-2.243,5-5,5h-5.917C6.082,24,.47,19.208.03,12.854c-.241-3.476,1.027-6.878,3.479-9.333S9.363-.206,12.836.029c6.26.425,11.164,5.833,11.164,12.312Zm-2,0c0-5.431-4.084-9.962-9.299-10.316-.229-.016-.458-.023-.686-.023-2.656,0-5.209,1.048-7.091,2.933-2.044,2.046-3.101,4.883-2.899,7.782.373,5.38,5.024,9.285,11.059,9.285h5.917c1.654,0,3-1.346,3-3v-6.66Z"/>
                        </svg>

                        Сообщения
                    </NavLink>
                    <NavLink to=''>
                        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" id="Isolation_Mode"
                             data-name="Isolation Mode"
                             viewBox="0 0 24 24" width="20" height="20">
                            <path
                                d="M12,23.462l-.866-.612C9.994,22.044,0,14.783,0,8.15A7.036,7.036,0,0,1,6.75.875,6.57,6.57,0,0,1,12,3.582,6.57,6.57,0,0,1,17.25.875,7.036,7.036,0,0,1,24,8.15c0,6.633-9.994,13.894-11.134,14.7ZM6.75,3.875A4.043,4.043,0,0,0,3,8.15c0,3.916,5.863,9.21,9,11.611,3.137-2.4,9-7.695,9-11.611a4.043,4.043,0,0,0-3.75-4.275A4.043,4.043,0,0,0,13.5,8.15h-3A4.043,4.043,0,0,0,6.75,3.875Z"/>
                        </svg>

                        Избранное
                    </NavLink>
                    <NavLink to=''>
                        <svg className="icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg" id="Layer_1"
                             data-name="Layer 1"
                             viewBox="0 0 24 24" width="20" height="20">
                            <path
                                d="M20.93,7.3c-.34-1.91-2-3.3-3.94-3.3h-.16c.11-.31,.17-.65,.17-1,0-1.65-1.35-3-3-3h-4c-1.65,0-3,1.35-3,3,0,.35,.06,.69,.17,1h-.16c-1.94,0-3.6,1.39-3.94,3.3L.81,20h7.19c0,2.21,1.79,4,4,4s4-1.79,4-4h7.19l-2.27-12.7ZM9,3c0-.55,.45-1,1-1h4c.55,0,1,.45,1,1s-.45,1-1,1h-4c-.55,0-1-.45-1-1Zm3,19c-1.1,0-2-.9-2-2h4c0,1.1-.9,2-2,2ZM3.19,18l1.85-10.35c.17-.96,1-1.65,1.97-1.65h9.98c.97,0,1.8,.69,1.97,1.65l1.85,10.35H3.19Z"/>
                        </svg>

                        Уведомления
                    </NavLink>
                    <NavLink to='/profile'>
                        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" id="Isolation_Mode" data-name="Isolation Mode"
                             viewBox="0 0 24 24" width="20" height="20">
                            <path
                                d="M21,24H18V19a2,2,0,0,0-2-2H8a2,2,0,0,0-2,2v5H3V19a5.006,5.006,0,0,1,5-5h8a5.006,5.006,0,0,1,5,5Z"/>
                            <path d="M12,12a6,6,0,1,1,6-6A6.006,6.006,0,0,1,12,12Zm0-9a3,3,0,1,0,3,3A3,3,0,0,0,12,3Z"/>
                        </svg>

                        Профиль
                    </NavLink>
                    <button>
                        Подать объявление
                    </button>
                </div>
            </nav>
        </header>

    )
}