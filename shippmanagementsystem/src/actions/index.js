import { FETCH_SHIPPMENT_DATA , FETCH_SHIPPMENT_DETAIL_DATA, UPDATE_SHIPPENT_DATA} from './typings'
import { apiURL } from '../constants'
import { connect } from 'react-redux';
import axios from 'axios'


const fetchShippmentDetail_apiURL = apiURL + '/shipments'


//Fetching all shippment details - List View 
export const fetchAllShippmentDetails = () => {
    return (dispatch) => {
        return axios.get(fetchShippmentDetail_apiURL).then(response => {
            dispatch({
                type: FETCH_SHIPPMENT_DATA,
                data: response.data
              });
        }).catch(error => {
            throw(error)
        })

    }
}


//Fetching a selected shippment detail - Sepaerate page
export const fetchShippmentInDetail = (id) => {
    const fetchShippmentInDetail_apiURL = fetchShippmentDetail_apiURL + '/' + id
    return (dispatch) => {
        return axios.get(fetchShippmentInDetail_apiURL).then(response => {
            dispatch({
                type: FETCH_SHIPPMENT_DETAIL_DATA,
                data: response.data
              });
        }).catch(error => {
            throw(error)
        })

    }
}

//Update shippment name in shippment informtion

export const updateShippmentDetails = (shippmentId,shippmentObj) => {
    const updateShippmentInDetail_apiURL = fetchShippmentDetail_apiURL + '/' + shippmentId
    return (dispatch) => {
        return axios.put(updateShippmentInDetail_apiURL,shippmentObj).then(response => {
            dispatch({
                type: UPDATE_SHIPPENT_DATA,
                data: response.data
              });
        }).catch(error => {
            throw(error)
        })

    }

}