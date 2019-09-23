import axios from 'axios';
export const FETCH_PRODUCTS_BEGIN = 'FETCH_PRODUCTS_BEGIN';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

export function fetchProducts() {
  let Api = axios.create({
    baseURL: `http://localhost:8081`,
    withCredentials: true,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  });

  return dispatch => {
    dispatch(fetchProductsBegin());
    return Api.get(`http://localhost:8081/products`)
      .then(res => {
        dispatch(fetchProductsSuccess(res.data));
        // console.log(res.data);
        return res.data;
      })
      .catch(error => {
        dispatch(fetchProductsFailure(error));
        handleErrors();
      });
  };
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText + 'asd' + response);
  }
  return response;
}

export const fetchProductsBegin = () => ({
  type: FETCH_PRODUCTS_BEGIN
});

export const fetchProductsSuccess = products => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: { products }
});

export const fetchProductsFailure = error => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: { error }
});
