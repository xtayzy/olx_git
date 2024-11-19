import styles from "./style.module.css";
import { HeaderComponent } from "../../Components/Header/index.jsx";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuthCheck } from "../../redux/slice/users.js";

export const ProfilePage = () => {
    useAuthCheck(true);

    const navigate = useNavigate();
    const user = useSelector(state => state.user.user);

    useEffect(() => {
        if (!user) {
            navigate("/login");
        }
    }, [user, navigate]);

    console.log(user);

    const logOut = () => {
        localStorage.removeItem("access_token");
        navigate("/login");
    };

    return (
        <div>
            <HeaderComponent />
            <h1>Профиль</h1>
            <button onClick={logOut}>Выйти</button>
        </div>
    );
};

