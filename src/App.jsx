import { Routes, Route, Link, useLocation } from 'react-router-dom'
import Header from './components/Header.jsx'
import MainPage from './pages/MainPage'
import ShopPage from './pages/ShopPage'
import CartPage from './pages/CartPage'
import './components/css/Headings.css'
import './components/css/Containers.css'
import './App.css'


function App() {
    const location = useLocation();

    const navClass = `${location.pathname === '/' ? 'navHome' : 'navAll'}`;
    const headerVisibility = `${location.pathname === '/' ? 'noHeader' : 'headerVis'}`;

    return (
        <>
            <Header className={headerVisibility}></Header>
            <nav className= {navClass} >
                <Link to="/" className="lightText s40 pr20 zoomin">Home</Link>
                <Link to="/shop" className="lightText s40 pr20 zoomin">Shop</Link>
                <Link to="/cart" className="lightText s40 pr20 zoomin">Cart</Link>
            </nav>

            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/shop" element={<ShopPage />} />
                <Route path="/cart" element={<CartPage />} />
            </Routes>
        </>
    )
}

export default App;