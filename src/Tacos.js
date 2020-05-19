import React from 'react'
import { Switch, Link } from 'react-router-dom'
import RouteWithSubRoutes from './RouteWithSubRoutes'

export default function Tacos({ routes }) {
    return (
        <div>
            <h2>Tacos</h2>
            <ul>
                <li>

                    <Link to="/tacos/bus">Bus</Link>
                </li>
                <li>
                    <Link to="/tacos/cart">Cart</Link>
                </li>
            </ul>

            <Switch>
                {routes.map((route, i) => (
                    <RouteWithSubRoutes key={i} {...route} />
                ))}
            </Switch>
        </div>
    )
}
