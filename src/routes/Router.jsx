import { Routes, Route, Navigate } from "react-router-dom";
import { Crypto } from "../components/ExploreCoins/Crypto";
import { Investment } from "../components/investmentPlane/Investment";
import { MainChart } from "../components/mainChart/MainChart";
import { MonthlyChart } from "../components/monthlyChart/MonthlyChart";
import { HistoryChart } from "../components/histroryChart/HistoryChart";
import Blog from "../pages/Blog";
import Dashboard from "../pages/Dashboard";
import FAQ from "../pages/Faq";
import Policy from "../pages/Policy";
import Support from "../pages/Support";
import Team from "../pages/Team";
import Login from ".././components/Login_signUp/Login";

const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to="/dashboard" element={<Dashboard />} />}
      />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/team" element={<Team />} />
      <Route path="/support" element={<Support />} />
      <Route path="/policy" element={<Policy />} />
      <Route path="/coins" element={<Crypto />} />
      <Route path="/mainChart" element={<MainChart />} />
      <Route path="/investment" element={<Investment />} />
      <Route path="/mainChart" element={<MainChart />} />
      <Route path="/historyChart" element={<HistoryChart/>} />
      <Route path = "/monthly" element ={<MonthlyChart />} />
      <Route path="/login" element={<Login />} />
      
    </Routes>
  );
};

export default Router;
