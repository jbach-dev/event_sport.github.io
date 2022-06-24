import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './Features/Header'

// Js
const Events = lazy(() => import('./Features/Events'))
// const Header = lazy(() => import('./Features/Header'))
const FAQ = lazy(() => import('./Features/FAQ'))
const ThreeDots = lazy(() => import('./Components/Loader/ThreeDots'))

// Css
// import './Features/App.css'

const App = () => (
    <Suspense fallback={<ThreeDots />}>
        {/* <Suspense fallback={<p>Chargement ...</p>}> */}
        <Router>
            <Header />
            <Switch>
                <Route exact path="/" component={Events} />
                {/* <Route path="/events" element={<Events />} /> */}
                <Route path="/faq" component={FAQ} />
                {/* <Route path="*" element={<Page404 />} /> */}
            </Switch>
        </Router>
    </Suspense>
)

export default App
