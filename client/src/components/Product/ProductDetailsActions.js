export const FETCH_PRODUCT_BEGIN = 'FETCH_PRODUCT_BEGIN';
export const FETCH_PRODUCT_SUCCESS = 'FETCH_PRODUCT_SUCCESS';
export const FETCH_PRODUCT_FAILURE = 'FETCH_PRODUCT_FAILURE';

export function fetchProduct(slug) {
  return dispatch => {
    dispatch(fetchProductBegin());
    return fetch('http://localhost:8081/products/' + slug)
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchProductSuccess(json));
        // console.log(json);
        return json;
      })
      .catch(error => dispatch(fetchProductFailure(error)));
  };
}

function handleErrors(response) {
  if (!response.ok) throw Error(response.statusText);
  return response;
}

export const fetchProductBegin = () => ({
  type: FETCH_PRODUCT_BEGIN
});

export const fetchProductSuccess = product => ({
  type: FETCH_PRODUCT_SUCCESS,
  payload: { product }
});

export const fetchProductFailure = error => ({
  type: FETCH_PRODUCT_FAILURE,
  payload: { error }
});
