import { BrowserRouter, Routes, Route } from "react-router-dom"

import { HealthyStoreProvider } from "../contexts/UserContext"

import HomePage from "../pages/HomePage";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp"
import Product from "../pages/Product";
import Bag from "../pages/Bag";
import PayInfos from "../pages/PayInfos/index"
import Checkout from "../pages/Checkout/index"
import Orders from "../pages/Orders/index"

export default function Router() {
    return(
        <HealthyStoreProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage/>} />
                    <Route path="/sign-in" element={<SignIn />} />
                    <Route path="/sign-up" element={<SignUp />} />
                    <Route path="/product" element={<Product />} />
                    <Route path="/bag" element={<Bag />} />
                    <Route path="/PayInfos" element={<PayInfos />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/orders" element={<Orders />} />
                </Routes>
            </BrowserRouter>
        </HealthyStoreProvider>
	)
}