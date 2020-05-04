export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const CREATE_PRODUCT = "CREATE_PRODUCT";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";

export const deleteProduct = (productId) => {
  return { type: DELETE_PRODUCT, pid: productId };
};

export const createProduct = (id, title, description, imagUrl, price) => {
  return {
    type: CREATE_PRODUCT,
    pid: id,
    productData: {
      title,
      description,
      imagUrl,
      price 
    },  
  };
};

export const updateProduct = (id,title, description, imagUrl) => {
  return {
    type: UPDATE_PRODUCT,
    pid: id,
    productData: {
      title,
      description,
      imagUrl,
    },
  };
};
