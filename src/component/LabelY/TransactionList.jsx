import "./TransactionList.css";

const FALLBACK_DATA = [
  {
    id: 1,
    title: "SM Mall",
    time: "5 giây trước",
    amount: -250,
  },
  {
    id: 2,
    title: "SM Mall",
    time: "25 phút trước",
    amount: 250,
  },
  {
    id: 3,
    title: "SM Mall",
    time: "2 tiếng trước",
    amount: -250,
  },
  {
    id: 4,
    title: "SM Mall",
    time: "3 tiếng trước",
    amount: 250,
  },
];

export default function TransactionList({ data = [] }) {
  const renderData = data.length ? data : FALLBACK_DATA;

  return (
    <div className="transaction-list">
      {renderData.map((item) => (
        <div className="transaction-item" key={item.id}>
          <div className="transaction-left">
            <div className="transaction-icon">+</div>

            <div className="transaction-info">
              <p className="transaction-title">{item.title}</p>
              <span className="transaction-time">{item.time}</span>
            </div>
          </div>

          <div
            className={`transaction-amount ${
              item.amount > 0 ? "plus" : "minus"
            }`}
          >
            {item.amount > 0 ? `+${item.amount}` : item.amount}
          </div>
        </div>
      ))}
    </div>
  );
}


// import "./TransactionList.css";

// export default function TransactionList({ data }) {
//   return (
//     <div className="transaction-list">
//       {data.map((item) => (
//         <div className="transaction-item" key={item.id}>
//           <div className="transaction-left">
//             <div className="transaction-icon">+</div>

//             <div className="transaction-info">
//               <p className="transaction-title">{item.title}</p>
//               <span className="transaction-time">{item.time}</span>
//             </div>
//           </div>

//           <div
//             className={`transaction-amount ${
//               item.amount > 0 ? "plus" : "minus"
//             }`}
//           >
//             {item.amount > 0 ? `+${item.amount}` : item.amount}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// import TransactionList from "./TransactionList";

// <TransactionList data={transactions} />;