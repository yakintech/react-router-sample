import { Outlet, Route, Routes } from "react-router-dom";

function Dashboard() {
    return (
      <div>
        <h1>Dashboard</h1>
        <Outlet />
      </div>
    );
  }
  
  function App2() {
    return (
      <Routes>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route
            path="messages"
            element={<DashboardMessages />}
          />
          <Route path="tasks" element={<DashboardTasks />} />
        </Route>
      </Routes>
    );
  }


  export default App2;


  function DashboardMessages(){
    return <h1>DashboardMessages</h1>
  }

    function DashboardTasks(){
        return <h1>DashboardTasks</h1>
    }