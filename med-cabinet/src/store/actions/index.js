import { authenticAxios } from '../../utils/authenticAxios';
import axios from 'axios';

// Retrieving strains from the api

export const getStrainsDataFromActions = () => {
    return (dispatch) => {
        dispatch({
            type: 'FETCH_STRAINS_START',
        });
        axios
            .get('https://medcabinet-strain-api.herokuapp.com/strains/all')
            .then((res) => {
                // console.log('res of axios.get: ', res.data);
                dispatch({
                    type: 'FETCH_STRAINS_SUCCESS',
                    payload: JSON.parse(res.data),
                }); // UPDATE PAYLOAD////////
            })
            .catch((err) => {
                console.log('error', err);
                dispatch({
                    type: 'FETCH_STRAINS_FAILURE',
                    payload: err.data,
                });
            });
    };
};

export const getStrains = () => {
    return axios
        .get('https://medcabinet-strain-api.herokuapp.com/strains/all')
        .then((res) => {
            return res;
        })
        .catch((err) => {
            return err, console.log(err);
        });
};
