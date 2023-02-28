import { useState, useRef } from "react";
import { Link, Head } from "@inertiajs/inertia-react";
export default function Header() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownTarget = useRef();

    const showSidebar = () => {
        if (dropdownOpen) {
            dropdownTarget.current.classList.remove("show");
        } else {
            dropdownTarget.current.classList.add("show");
        }
        setDropdownOpen(!dropdownOpen);
    };
    return (
        <>
            <header className="mb-5">
                <div className="header-top">
                    <div className="container">
                        <div className="logo">
                            <a href="index.html">
                                <img
                                    src="/css/theme/assets/images/logo/logo.svg"
                                    alt="Logo"
                                />
                            </a>
                        </div>
                        <div className="header-top-right">
                            <div className="dropdown">
                                <a
                                    href="#"
                                    onClick={showSidebar}
                                    className="user-dropdown d-flex align-items-center dropend dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <div className="avatar avatar-md2">
                                        <img
                                            src="/css/theme/assets/images/faces/1.jpg"
                                            alt="Avatar"
                                        />
                                    </div>
                                    <div className="text">
                                        <h6 className="user-dropdown-name">
                                            John Ducky
                                        </h6>
                                        <p className="user-dropdown-status text-sm text-muted">
                                            Member
                                        </p>
                                    </div>
                                </a>
                                <ul
                                    className="dropdown-menu dropdown-menu-end shadow-lg"
                                    aria-labelledby="topbarUserDropdown"
                                    ref={dropdownTarget}
                                >
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            My Account
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Settings
                                        </a>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item"
                                            href="auth-login.html"
                                        >
                                            Logout
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            {/* Burger button responsive */}
                            <a
                                href="#"
                                className="burger-btn d-block d-xl-none"
                            >
                                <i className="bi bi-justify fs-3" />
                            </a>
                        </div>
                    </div>
                </div>
                <nav className="main-navbar">
                    <div className="container">
                        <ul>
                            <li className="menu-item">
                                <Link
                                    href={route("dashboard")}
                                    className="menu-link"
                                >
                                    <i className="bi bi-grid-fill" />
                                    <span>Dashboard</span>
                                </Link>
                            </li>
                            <li className="menu-item has-sub">
                                <a href="#" className="menu-link">
                                    <i className="bi bi-stack" />
                                    <span>Components</span>
                                </a>
                                <div className="submenu">
                                    {/* Wrap to submenu-group-wrapper if you want 3-level submenu. Otherwise remove it. */}
                                    <div className="submenu-group-wrapper">
                                        <ul className="submenu-group">
                                            <li className="submenu-item">
                                                <a
                                                    href="component-alert.html"
                                                    className="submenu-link"
                                                >
                                                    Alert
                                                </a>
                                            </li>
                                            <li className="submenu-item">
                                                <a
                                                    href="component-badge.html"
                                                    className="submenu-link"
                                                >
                                                    Badge
                                                </a>
                                            </li>
                                            <li className="submenu-item">
                                                <a
                                                    href="component-breadcrumb.html"
                                                    className="submenu-link"
                                                >
                                                    Breadcrumb
                                                </a>
                                            </li>
                                            <li className="submenu-item">
                                                <a
                                                    href="component-button.html"
                                                    className="submenu-link"
                                                >
                                                    Button
                                                </a>
                                            </li>
                                            <li className="submenu-item">
                                                <a
                                                    href="component-card.html"
                                                    className="submenu-link"
                                                >
                                                    Card
                                                </a>
                                            </li>
                                            <li className="submenu-item">
                                                <a
                                                    href="component-carousel.html"
                                                    className="submenu-link"
                                                >
                                                    Carousel
                                                </a>
                                            </li>
                                            <li className="submenu-item">
                                                <a
                                                    href="component-collapse.html"
                                                    className="submenu-link"
                                                >
                                                    Collapse
                                                </a>
                                            </li>
                                            <li className="submenu-item">
                                                <a
                                                    href="component-dropdown.html"
                                                    className="submenu-link"
                                                >
                                                    Dropdown
                                                </a>
                                            </li>
                                        </ul>
                                        <ul className="submenu-group">
                                            <li className="submenu-item">
                                                <a
                                                    href="component-list-group.html"
                                                    className="submenu-link"
                                                >
                                                    List Group
                                                </a>
                                            </li>
                                            <li className="submenu-item">
                                                <a
                                                    href="component-modal.html"
                                                    className="submenu-link"
                                                >
                                                    Modal
                                                </a>
                                            </li>
                                            <li className="submenu-item">
                                                <a
                                                    href="component-navs.html"
                                                    className="submenu-link"
                                                >
                                                    Navs
                                                </a>
                                            </li>
                                            <li className="submenu-item">
                                                <a
                                                    href="component-pagination.html"
                                                    className="submenu-link"
                                                >
                                                    Pagination
                                                </a>
                                            </li>
                                            <li className="submenu-item">
                                                <a
                                                    href="component-progress.html"
                                                    className="submenu-link"
                                                >
                                                    Progress
                                                </a>
                                            </li>
                                            <li className="submenu-item">
                                                <a
                                                    href="component-spinner.html"
                                                    className="submenu-link"
                                                >
                                                    Spinner
                                                </a>
                                            </li>
                                            <li className="submenu-item">
                                                <a
                                                    href="component-tooltip.html"
                                                    className="submenu-link"
                                                >
                                                    Tooltip
                                                </a>
                                            </li>
                                            <li className="submenu-item has-sub">
                                                <a
                                                    href="#"
                                                    className="submenu-link"
                                                >
                                                    Extra Components
                                                </a>
                                                {/* 3 Level Submenu */}
                                                <ul className="subsubmenu">
                                                    <li className="subsubmenu-item">
                                                        <a
                                                            href="extra-component-avatar.html"
                                                            className="subsubmenu-link"
                                                        >
                                                            Avatar
                                                        </a>
                                                    </li>
                                                    <li className="subsubmenu-item">
                                                        <a
                                                            href="extra-component-sweetalert.html"
                                                            className="subsubmenu-link"
                                                        >
                                                            Sweet Alert
                                                        </a>
                                                    </li>
                                                    <li className="subsubmenu-item">
                                                        <a
                                                            href="extra-component-toastify.html"
                                                            className="subsubmenu-link"
                                                        >
                                                            Toastify
                                                        </a>
                                                    </li>
                                                    <li className="subsubmenu-item">
                                                        <a
                                                            href="extra-component-rating.html"
                                                            className="subsubmenu-link"
                                                        >
                                                            Rating
                                                        </a>
                                                    </li>
                                                    <li className="subsubmenu-item">
                                                        <a
                                                            href="extra-component-divider.html"
                                                            className="subsubmenu-link"
                                                        >
                                                            Divider
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    );
}
