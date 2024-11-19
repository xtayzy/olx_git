import { createSlice } from "@reduxjs/toolkit";

// Создаём slice для работы с объявлениями
export const advertisementSlice = createSlice({
    name: "advertisement",
    initialState: {
        advertisements: null,
    },
    reducers: {
        setAdvertisements: (state, action) => {
            state.advertisements = action.payload;
        },
        clearAdvertisements: (state) => {
            state.advertisements = null;
        },
    },
});

export const { setAdvertisements, clearAdvertisements } = advertisementSlice.actions;


export const fetchAdvertisements = async (dispatch) => {
    const token = localStorage.getItem("access_token");

    if (!token) {
        console.error("Токен отсутствует. Пожалуйста, выполните вход.");
        return;
    }

    try {
        const response = await fetch("http://127.0.0.1:8000/olx/advertisement", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        const data = await response.json();
        dispatch(setAdvertisements(data));
    } catch (error) {
        console.error(error);
    }
};









