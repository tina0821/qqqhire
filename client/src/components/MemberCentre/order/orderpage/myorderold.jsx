// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Popbox from '../popbox';

// function Myorder() {
//   const [tradeitems, setTradeitems] = useState([]);
 
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('http://localhost:8000/api/myorder');
//         const tradeitems = response.data.map((tradeitem) => ({
//           ...tradeitem,
//           rentStart: formatDate(tradeitem.rentStart),
//           rentEnd: formatDate(tradeitem.rentEnd),
//         }));
//         console.log(tradeitems);
//         setTradeitems(tradeitems);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchData();
//   }, []);

//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     const year = date.getFullYear();
//     const month = date.getMonth() + 1;
//     const day = date.getDate();
//     return `${year}-${month}-${day}`;
//   };

//   const handleCancel = (tradeitemId) => {
//     setTradeitems((prevTradeitems) =>
//       prevTradeitems.map((tradeitem) => {
//         if (tradeitem.tradeitemId === tradeitemId) {
//           return { ...tradeitem, state: 4 };
//         }
//         return tradeitem;
//       })
//     );
//   };

//   return (
//     <div className="order-component">
//       <table className="order-table">
//         <thead>
//           <tr>
//             <th>訂單編號</th>
//             <th>商品</th>
//             <th>預約日期</th>
//             <th>歸還日期</th>
//             <th>租金</th>
//             <th>押金</th>
//             <th>訂單狀態</th>
//             <th>操作</th>
//           </tr>
//         </thead>
//         <tbody>
//           {tradeitems.map((tradeitem) => {
//             if (tradeitem.state < 3) {
//               let action = null;
//               if (tradeitem.state === 0) {
//                 action = (
//                   <Popbox
//                     tradeitemId={tradeitem.tradeitemId}
//                     onCancel={handleCancel}
//                   />
//                 );
//               }
//               return (
//                 <tr id="trtd" key={tradeitem.tradeitemId}>
//                   <td>{tradeitem.tradeitemId}</td>
//                   <td>{tradeitem.productName}</td>
//                   <td>{tradeitem.rentStart}</td>
//                   <td>{tradeitem.rentEnd}</td>
//                   <td>{tradeitem.rent}</td>
//                   <td>{tradeitem.deposit}</td>
//                   <td>
//                     {tradeitem.state === 0
//                       ? '等待回應中'
//                       : tradeitem.state === 1
//                         ? '等待租借中'
//                         : tradeitem.state === 2
//                           ? '租借中'
//                           : tradeitem.state}
//                   </td>
//                   <td>{action}</td>
//                 </tr>
//               );
//             }
//             return null;
//           })}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default Myorder;