import { BrowserRouter, Routes, Route } from "react-router-dom"

import { HealthyStoreProvider } from "../contexts/UserContext"

// import HomePage from "../pages/HomePage";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp"
// import Product from "../pages/Product";
// import Cart from "../pages/Cart";
// import Checkout from "../pages/Checkout"

export default function Router() {
    return(
        <HealthyStoreProvider>
            <BrowserRouter>
                <Routes>
                    {/* <Route path="/" element={<HomePage/>} /> */}
                    <Route path="/sign-in" element={<SignIn />} />
                    <Route path="/sign-up" element={<SignUp />} />
                    {/* <Route path="/product" element={<Product />} /> */}
                    {/* <Route path="/cart" element={<Cart />} /> */}
                    {/* <Route path="/checkout" element={<Checkout />} /> */}
                </Routes>
            </BrowserRouter>
        </HealthyStoreProvider>
	)
}