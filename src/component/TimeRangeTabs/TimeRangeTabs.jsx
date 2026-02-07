    import { useState } from "react";
    import "./TimeRangeTabs.css";

    const TABS = [
    { label: "1d", value: "1d" },
    { label: "3d", value: "3d" },
    { label: "7d", value: "7d" },
    { label: "30d", value: "30d" },
    ];

    export default function TimeRangeTabs({ onChange}) {
    const [active, setActive] = useState("1d");

    const handleClick = (value) => {
        setActive(value);
        onChange?.(value); 
    };

    return (
        <div className="time-tabs">
        {TABS.map((tab) => (
            <button
            key={tab.value}
            className={`time-tab ${active === tab.value ? "active" : ""}`}
            onClick={() => handleClick(tab.value)}
            >
            {tab.label}
            </button>
        ))}
        </div>
    );
    }






// import { useState } from "react";
// import "./TimeRangeTabs.css";

// export default function TimeRangeTabs({ TABS = [], onChange }) {
//   const [active, setActive] = useState(TABS[0]?.value);

//   const handleClick = (tab) => {
//     setActive(tab.value);      // 👈 dòng này HOÀN TOÀN ĐÚNG
//     onChange?.(tab);           // truyền object tab lên cha
//   };

//   return (
//     <div className="time-tabs">
//       {TABS.map((tab) => (
//         <button
//           key={tab.value}
//           className={`time-tab ${active === tab.value ? "active" : ""}`}
//           onClick={() => handleClick(tab)}
//         >
//           {tab.label}
//         </button>
//       ))}
//     </div>
//   );
// }

// const TIME_TABS = [
//   { label: "1d", value: "1d" },
//   { label: "3d", value: "3d" },
//   { label: "7d", value: "7d" },
//   { label: "30d", value: "30d" },
// ];

// const handleTimeChange = (tab) => {
//   console.log(tab); 
//   // { label: "7d", value: "7d" }
// };

// <TimeRangeTabs TABS={TIME_TABS} onChange={handleTimeChange} />;
