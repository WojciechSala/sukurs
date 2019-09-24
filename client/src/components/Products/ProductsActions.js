export const FETCH_PRODUCTS_BEGIN = 'FETCH_PRODUCTS_BEGIN';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

// import axios from 'axios';
// export function fetchProducts() {
//   let Api = axios.create({
//     baseURL: `http://localhost:8081`,
//     withCredentials: true,
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json'
//     }
//   });

//   return dispatch => {
//     dispatch(fetchProductsBegin());
//     return Api.get(`/products`)
//       .then(res => {
//         dispatch(fetchProductsSuccess(res.data));
//         // console.log(res.data);
//         return res.data;
//       })
//       .catch(error => {
//         dispatch(fetchProductsFailure(error));
//         // handleErrors(error);
//       });
//   };
// }

export function fetchProducts() {
  return dispatch => {
    dispatch(fetchProductsBegin());
    return fetch('http://localhost:8081/products')
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchProductsSuccess(json));
        console.log(json);
        return json;
      })
      .catch(error => dispatch(fetchProductsFailure(error)));
  };
}

function handleErrors(response) {
  if (!response.ok) throw Error(response.statusText);
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
