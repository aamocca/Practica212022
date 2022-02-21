import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./assets/css/app.css";

import App from "./components/App";
import GenresInDb from "./components/GenresInDb";
import LastMovieInDb from "./components/LastMovieInDb";
import ContentRowMovies from "./components/ContentRowMovies";
import SearchMovies from "./components/SearchMovies";

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/GenresInDb" element={<GenresInDb />} />
            <Route path="/LastMovieInDb" element={<LastMovieInDb />} />
            <Route path="/ContentRowMovies" element={<ContentRowMovies />} />
            <Route path="/Search" element={<SearchMovies />} />
        </Routes>
    </BrowserRouter>,
    document.getElementById("root")
);
