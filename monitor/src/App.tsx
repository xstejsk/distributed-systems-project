import { useState } from "react";
import ThemeContext from "./context/ThemeContext";
import SidebarContext from "./context/SidebarContext";
import { Routes, Route, Navigate } from "react-router";
import Accounts from "./pages/Accounts";
import Layout from "./components/Layout";
import Transactions from "./components/Transactions";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [expanded, setExpanded] = useState(false);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <SidebarContext.Provider value={{ expanded, setExpanded }}>
        <main className="App">
          <Routes>
            <Route path="/" element={<Navigate to="/transactions" />} />
            <Route path="/accounts">
              <Route
                index
                element={
                  <Layout>
                    <Accounts />
                  </Layout>
                }
              />
            </Route>
            <Route
              path="/transactions"
              element={
                <Layout>
                  <Transactions />
                </Layout>
              }
            />
          </Routes>
        </main>
      </SidebarContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
