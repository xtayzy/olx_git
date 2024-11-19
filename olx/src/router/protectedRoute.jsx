import {useEffect, useState} from 'react';
import {Navigate, useNavigate} from 'react-router-dom';
import {setUser} from "../redux/slice/users.js";
import {useDispatch} from "react-redux";

const ProtectedRoute = ({children, kuda}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isAuthorized, setIsAuthorized] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const checkAuthorization = async () => {
            const token = localStorage.getItem('access_token');

            try {
                const response = await fetch('http://127.0.0.1:8000/auth/current-user', {
                    method: 'GET',
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': token
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    console.log(data)

                    setIsAuthorized(true);
                    navigate('/' + kuda)
                } else {
                    setIsAuthorized(false);
                }
            } catch (error) {
                console.error('Ошибка при проверке авторизации:', error);
                setIsAuthorized(false);
            } finally {
                setIsLoading(false);
            }
        };

        checkAuthorization();
    }, []);

    if (isLoading) {
        return <div>Загрузка...</div>;
    }
    return isAuthorized ? children : <Navigate to="/register"/>;
};

export default ProtectedRoute;