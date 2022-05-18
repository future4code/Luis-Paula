// import React from 'react';
// import { useGetOrder } from '../../services/useGetOrder';
// import { useParams } from 'react-router-dom';

// export const SingleOrderPage = () => {
//   const params = useParams();
//   const order = useGetOrder([], params.order_id);

//   const orderCard = Object.keys(order).map((key) => {
//     return order[key].map((index) => {
//       return (
//         <div>
//           <p>{index.name}</p>
//         </div>
//       );
//     });
//   });
//   return (
//     <div>
//       <h1>Single order</h1>
//       <div>{orderCard}</div>
//     </div>
//   );
// };
