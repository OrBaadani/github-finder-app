import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ToggleBtn from './ToggleBtn';

function Navbar({ title, toggleTheme }) {
    return (
        <nav className="navbar mb-12 shadow-lg bg-neutral-focus text-neutral-content ">
            <div className="container mx-auto justify-between flex-col xs:flex-row">
                <div className="flex-none px-2 mx-2">
                    <FaGithub className="inline pr-2 text-3xl" />
                    <Link to="/" className="text-lg font-bold align-middle">
                        {title}
                    </Link>
                </div>
                <div className="justify-center">
                    <ToggleBtn toggleTheme={toggleTheme} />
                </div>

                <div className=" px-2 mx-2">
                    <div className="flex justify-end">
                        <Link
                            to="/"
                            className="btn btn-ghost btn-sm rounded-btn"
                        >
                            Home
                        </Link>
                        <Link
                            to="/about"
                            className="btn btn-ghost btn-sm rounded-btn"
                        >
                            About
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
Navbar.defaultProps = {
    title: 'Github Finder',
};
Navbar.propTypes = {
    title: PropTypes.string,
};

export default Navbar;
