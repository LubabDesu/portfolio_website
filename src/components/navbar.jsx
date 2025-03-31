import React from "react";
import Link from "next/link";
import "./navbar.css";

export const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <div className="logo-flex-container">
                        <Link href="/" className="logo-flex-box">
                            <h4 className="oxanium-semibold team-name">
                                Lucas
                            </h4>
                        </Link>
                    </div>
                </li>
                <li className="dropdown">
                    <Link href={"/OverviewAbout"} className="blinker-regular">
                        About Me
                    </Link>
                    <ul className="dropdown-content">
                        <li>
                            <Link
                                href={"/OverviewAbout"}
                                className="blinker-regular dropdown-info"
                            >
                                introduction!
                            </Link>
                        </li>
                        <li>
                            <Link href={"/cv"} className="blinker-regular">
                                actual resume/cv
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className="dropdown">
                    <Link href="/projects" className="blinker-regular">
                        Projects
                    </Link>
                    {/* <ul className="dropdown-content">
                        <li>
                            <Link href="/Overview" className="blinker-regular">
                                overview
                            </Link>
                        </li>
                        <li>
                            <Link href="/ml" className="blinker-regular">
                                machine learning
                            </Link>
                        </li>
                        <li>
                            <Link href="/swe" className="blinker-regular">
                                software development
                            </Link>
                        </li>
                        <li>
                            <Link href="/music" className="blinker-regular">
                                music
                            </Link>
                        </li>
                    </ul> */}
                </li>
                <li>
                    <Link href="/contact" className="blinker-regular">
                        {" "}
                        contact me{" "}
                    </Link>
                </li>
            </ul>
        </nav>
    );
};
