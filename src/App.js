import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux"
import Header from "./components/header/header";
import Home from "./pages/home/home";
import GamePage from "./pages/gamePage/gamePage";
import OrderPage from "./pages/orderPage/orderPage";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <Header />
          <Routes>
            <Route path="/game-store" element={<Home />} />
            <Route path="app/:title" element={<GamePage />} />
            <Route path="/order" element={<OrderPage />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
