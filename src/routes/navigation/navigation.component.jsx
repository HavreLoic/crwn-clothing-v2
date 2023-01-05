import { Outlet, Link } from "react-router-dom"
import { Fragment } from "react";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import './navigation.style.scss'

const NavigationBar = () => {
    return (
        <Fragment>
            <div className="navigation">
                <Link to='/' className="logo-container">
                    <CrwnLogo className="logo" />
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to='/shop'>SHOP</Link>
                    <Link className="nav-link" to='/auth'>Sign in</Link>
                    <Link className="nav-link" to='/sign-up-form'>Sign up</Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default NavigationBar;