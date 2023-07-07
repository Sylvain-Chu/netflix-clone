import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from '../src/components/app'
import {themeSettings} from "./components/app/theme/theme-settings";
import {ThemeProvider} from "styled-components";
import {BrowserRouter as Router} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ThemeProvider theme={themeSettings}>
            <Router>
                <App/>
            </Router>
        </ThemeProvider>
    </React.StrictMode>
);
