import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {useNavigate} from "react-router-dom";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        clearUser: (state) => {
            state.user = null;
        }
    }
});

export const { setUser, clearUser } = userSlice.actions;

// Функция для получения текущего пользователя
export const getCurrentUser = async () => {
    const token = localStorage.getItem("access_token");

    if (!token) {
        return null;
    }

    try {
        const response = await fetch('http://127.0.0.1:8000/auth/current-user', {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            },
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data; // Возвращаем пользователя
    } catch (error) {
        console.error('Ошибка при получении текущего пользователя:', error);
        return null;
    }
};

// Создаем useEffect для получения и установки пользователя
export const useAuthCheck = (requiresAuth = true) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const checkUser = async () => {
            const token = localStorage.getItem("access_token");

            if (!token) {
                dispatch(clearUser());
                if (requiresAuth) {
                    navigate("/register");
                }
            } else {
                const user = await getCurrentUser();
                if (user) {
                    dispatch(setUser(user));
                    console.log(user);
                } else {
                    localStorage.removeItem("access_token");
                    dispatch(clearUser());
                    if (requiresAuth) {
                        navigate("/register");
                    }
                }
            }
        };

        checkUser();
    }, [dispatch, navigate, requiresAuth]);
};

