export type Pizza = {
  id: string;
  name: string;
  price: number;
  ingredients: object;
};

export type Order = {
  order_id: string;
  quantity: number;
  pizza_id: number;
};
export interface OrderDTO {
  quantity: number;
  pizza_id: number;
}
