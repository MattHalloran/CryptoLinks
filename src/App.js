import React from 'react';
import { Routes } from './Routes';
import './style.css'

export function App() {
    return (
        <div id="App">
            <main id="page-container">
                <div id="content-wrap">
                    <Routes />
                </div>
            </main>
        </div>
    );
}
