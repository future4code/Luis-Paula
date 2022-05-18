export const goToPizzas = (navigate) => {
  navigate('/');
};

export const goToOrders = (navigate) => {
  navigate('/orders');
};

export const goToOrder = (navigate, id) => {
  navigate(`/orders/${id}`);
};
