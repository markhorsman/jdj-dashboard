import React from "react"
import { Router } from "@reach/router"
import Layout from "../layout"
import PrivateRoute from "../components/privateRoute"
import Profile from "../components/profile"
import Stock_rent from "../components/stock_rent"
import Stock_sale from "../components/stock_sale"
import Stock_repair from "../components/stock_repair"
import Login from "../components/Login"

const App = () => (
    <Layout>
        <Router>
            <PrivateRoute path="/app/profile" component={Profile} />
            <PrivateRoute path="/app/stock_rent" component={Stock_rent} />
            <PrivateRoute path="/app/stock_sale" component={Stock_sale} />
            <PrivateRoute path="/app/stock_repair" component={Stock_repair} />
            <Login path="/app/login" />
        </Router>
    </Layout>
)

export default App