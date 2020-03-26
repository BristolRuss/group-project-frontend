import axios from './axios';

export const getCocktails = (id) => dispatch => {
    axios.get(`/ingredients/${id}`).then((data) => {
        dispatch({type: 'SETCOCKTAILS', data: data.data})
    });
};