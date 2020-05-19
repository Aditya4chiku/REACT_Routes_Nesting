import React from 'react'

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from 'react-router-dom'
import Sandwiches from './Sandwiches'
import Tacos from './Tacos'
import Bus from './Bus'
import Cart from './Cart'
import RouteWithSubRoutes from './RouteWithSubRoutes'


const routes = [
    {
        path: '/sandwiches',
        component: Sandwiches
    },
    {
        path: '/tacos',
        component: Tacos,
        routes: [
            {
                path: "/tacos/bus",
                component: Bus
            },
            {
                path: "/tacos/cart",
                component: Cart
            }
        ]
    }
]

export default function RouteConfigExample() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to='/tacos'>TAcos</Link>
                    </li>
                    <li>
                        <Link to='/sandwiches'>SandWhich</Link>
                    </li>
                </ul>
                <Switch>
                    {
                        routes.map((route, i) => (
                            <RouteWithSubRoutes key={i} {...route} />
                        ))
                    }
                </Switch>
            </div>
        </Router>
    )
}