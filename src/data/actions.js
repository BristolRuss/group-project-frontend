import axios from './axios';

export const getCocktails = (id) => dispatch => {
    axios.get(`/ingredients/${id}`).then((data) => {
        dispatch({type: 'SETCOCKTAILS', data: data.data})
    });
};

export const getDrink = (id) => dispatch => {
    axios.get(`/cocktails/${id}`).then((data) => {
        dispatch({type: 'SETDRINK', data: data.data})
    });
};