import { useState } from "react";
import "./DailyCheckin.css";

export default function DailyCheckin() {
  const [claimed, setClaimed] = useState(false);
  const [showReward, setShowReward] = useState(false);

  const handleClaim = () => {
    if (claimed) return;

    setClaimed(true);      // đổi button → ✔
    setShowReward(true);   // hiện +1000 bay lên

    setTimeout(() => {
      setShowReward(false);
    }, 1000);
  };

  return (
    <div className="checkin__item">
      <div className="checkin__left">
        <div className="checkin__icon">📅</div>

        <div>
          <p className="checkin__title">Điểm danh hằng ngày</p>
          <span className="checkin__reward-text">💎 +1000</span>
        </div>
      </div>

      {claimed ? (
        <div className="checkin__done">✔</div>
      ) : (
        <button className="checkin__btn" onClick={handleClaim}>
          Nhận
        </button>
      )}

      {showReward && (
        <div className="checkin__floating-reward">+1000</div>
      )}
    </div>
  );
}

// import { useState } from "react";
// import "./DailyCheckin.css";

// export default function CheckinItem({ item, onClaim }) {
//   const [showReward, setShowReward] = useState(false);

//   const handleClaim = () => {
//     if (item.claimed) return;

//     setShowReward(true);
//     onClaim(item.id); 

//     setTimeout(() => {
//       setShowReward(false);
//     }, 1000);
//   };

//   return (
//     <div className="checkin__item">
//       <div className="checkin__left">
//         <div className="checkin__icon">📅</div>

//         <div>
//           <p className="checkin__title">{item.title}</p>
//           <span className="checkin__reward-text">
//             💎 +{item.reward}
//           </span>
//         </div>
//       </div>

//       {item.claimed ? (
//         <div className="checkin__done">✔</div>
//       ) : (
//         <button className="checkin__btn" onClick={handleClaim}>
//           Nhận
//         </button>
//       )}

//       {showReward && (
//         <div className="checkin__floating-reward">
//           +{item.reward}
//         </div>
//       )}
//     </div>
//   );
// }


// import { useState } from "react";
// import CheckinItem from "./CheckinItem";

// const INIT_DATA = [
//   {
//     id: 1,
//     title: "Điểm danh hằng ngày",
//     reward: 1000,
//     claimed: false,
//   },
//   {
//     id: 2,
//     title: "Điểm danh 2 ngày",
//     reward: 300,
//     claimed: false,
//   },
// ];

// export default function DailyCheckin() {
//   const [data, setData] = useState(INIT_DATA);

//   const handleClaim = (id) => {
//     setData((prev) =>
//       prev.map((item) =>
//         item.id === id ? { ...item, claimed: true } : item
//       )
//     );
//   };

//   return (
//     <div>
//       {data.map((item) => (
//         <CheckinItem
//           key={item.id}
//           item={item}
//           onClaim={handleClaim}
//         />
//       ))}
//     </div>
//   );
// }
