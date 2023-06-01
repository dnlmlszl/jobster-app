import Wrapper from "../assets/wrappers/Navbar";
import { FaAlignLeft, FaUserCircle, FaCaretDown } from "react-icons/fa";
import Logo from "./Logo";
import { toggleSidebar } from "../features/user/userSlice";
import { clearStore } from '../features/user/userSlice'

import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const Navbar = () => {
    const [showLogout, setShowLogout] = useState(false)

    const toggle = () => {
        dispatch(toggleSidebar());
    };
    const { user } = useSelector((store) => store.user);
    const dispatch = useDispatch();
    return (
        <Wrapper>
            <div className="nav-center">
                <button
                    type="button"
                    className="toggle-btn"
                    onClick={toggle}
                >
                    <FaAlignLeft />
                </button>
                <div>
                    <Logo />
                    <h3 className="logo-text">dashboard</h3>
                </div>
                <div className="btn-container">
                    <button
                        type="button"
                        className="btn"
                        onClick={() => setShowLogout(!showLogout)}
                    >
                        <FaUserCircle />
                        {user?.name}
                        <FaCaretDown />
                    </button>
                    <div className={showLogout ? "dropdown show-dropdown" : "dropdown"}>
                        <button
                            type="button"
                            className="dropdown-btn"
                            onClick={() => dispatch(clearStore('Logout Successful...'))}
                        >
                            logout
                        </button>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};
export default Navbar;
