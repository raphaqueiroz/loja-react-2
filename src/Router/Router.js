import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Home} from "../pages/home/Home"
import {Carrinho} from "../pages/carrinho/Carrinho"
import {TelaFinal} from "../pages/telaFinal/TelaFinal"

export function Router () {

    <BrowserRouter>
    <Routes>
        <Route
            path = "/"
            element = {<Home/>}
            />

        <Route
        path = "/carrinho"
        element ={<Carrinho/>}
        />

        <Route
        path = "/telaFinal"
        element = {<TelaFinal/>}
        />
    </Routes>
    </BrowserRouter>
}