import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link to="/" title="redirection vers Events">
                                Events
                            </Link>
                        </li>
                        <li>
                            <Link to="/faq" title="redirection vers Faq">
                                FAQ
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
export default Header
