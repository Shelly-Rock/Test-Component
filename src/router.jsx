import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./layout/MainLayout.jsx";
import TimeRangeTabs from "./component/TimeRangeTabs/TimeRangeTabs.jsx";
import HomePage from "./HomePage/HomePage.jsx";
import TransactionList from "./component/LabelY/TransactionList.jsx";
import DailyCheckin from "./component/DailyCheckin/DailyCheckin.jsx";
export default function Router(){
        return (
            <Routes>
            <Route path="/" element={<MainLayout />}>
                  <Route index element={<HomePage />} />  
                  <Route path="dailyCheckin" element={<DailyCheckin/>} />  
                  <Route path="timeRangeTabs" element={<TimeRangeTabs/>} />  
                  <Route path="transactionList" element={<TransactionList/>} />  
           </Route>
        </Routes>
    )
}