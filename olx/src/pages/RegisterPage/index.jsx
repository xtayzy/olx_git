import {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./style.module.css";
import {useSelector} from "react-redux";
import {getCurrentUser, useAuthCheck} from "../../redux/slice/users.js";

export const RegisterPage = () => {
    useAuthCheck(false);
    const navigate = useNavigate();
    const user = useSelector(state => state.user.user);

    useEffect(() => {
        if (user) {
            navigate("/");
        }
    }, [user, navigate]);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const userData = {
            email,
            password,
        };

        const response = await fetch('http://127.0.0.1:8000/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        const data = await response.json();

        if (response.ok) {
            navigate('/login');// Перенаправление на страницу входа
        } else {
            alert(data.detail || 'Ошибка регистрации');
        }
    };

    return (
        <div className={styles.page_container}>
            <h2 className={styles.page_title}>Регистрация</h2>
            <div className={styles.form_container}>
                <form onSubmit={handleSubmit}>
                    <label>
                        <input
                            className={styles.form_input}
                            type="email"
                            placeholder="Введите email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </label>
                    <label>
                        <input
                            className={styles.form_input}
                            type="password"
                            placeholder="Введите пароль"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </label>
                    <button type="submit" className={styles.submit_button}>Зарегистрироваться</button>
                </form>
                <div className={styles.link_container}>
                    <span>Уже есть аккаунт? </span>
                    <a href="/login">Войти</a>
                </div>
            </div>
        </div>
    );
};
