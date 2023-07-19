import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Test from "./pages/test2"; // Import your page component here
import App from "./App"; // Import your default App component here

function AppRouter() {
    return (
      <Router>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/test2" element={<Test />} />
        </Routes>
      </Router>
    );
}

export default AppRouter;
  