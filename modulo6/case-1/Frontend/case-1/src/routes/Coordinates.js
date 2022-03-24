export const goToPizzas = (navigate) => {
  navigate('/');
};

export const goToOrders = (navigate) => {
  navigate('/orders');
};

export const goToOrderById = (navigate, id) => {
  navigate(`/orders/${id}`);
};
