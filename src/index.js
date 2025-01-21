import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { store } from "./redux/Store";
import { Toaster } from "react-hot-toast";

const rootElement = document.getElementById("root");

if (!rootElement) {
    console.error("Root element with id 'root' not found in index.html.");
} else {
    const root = ReactDOM.createRoot(rootElement);

    root.render(
        <BrowserRouter>
            <Provider store={store}>
                <App />
                <Toaster />
            </Provider>
        </BrowserRouter>
    );
}
