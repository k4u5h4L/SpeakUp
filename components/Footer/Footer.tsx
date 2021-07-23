import React from "react";
import Link from "next/link";

const Footer = () => {
    return (
        <footer
            className="
        footer-area footer-gradient
        position-relative
        mt-7 mt-lg-10
        pb-7 pb-lg-10
    "
        >
            <a href="#" className="footer-back">
                <svg
                    width="18"
                    height="10"
                    viewBox="0 0 18 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M1 9L9 1L17 9"
                        stroke="white"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </a>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <div className="footer-widget mb-7 mb-lg-10 text-center">
                            {/* <p className="footer-get small">
                                GET A MEMBERSHIP TODAY
                            </p> */}
                            <h2 className="display-4 mb-2">Start reading</h2>
                            <p className="mb-5 mb-md-7">
                                Just upload and let the AI take care of the
                                rest!
                            </p>
                            <Link href="/upload">
                                <a
                                    className="
                                        btn btn-primary
                                        text-white
                                        mb-5 mb-md-7
                                    "
                                >
                                    Start uploading
                                </a>
                            </Link>
                            {/* <p className="copyright-text m-0">
                                &copy; <span id="spanYear">2021</span> - All
                                rights reserved -
                                <a href="#" target="_blank" rel="noreferrer">
                                    Speakup
                                </a>
                            </p> */}
                        </div>
                    </div>
                </div>
                <div className="footer-bottom pt-4">
                    <div className="row align-items-center">
                        <div className="col-md-4">
                            <div
                                className="
                                        footer-widget
                                        text-center text-md-start
                                        mb-2 mb-md-0
                                    "
                            >
                                <div className="footer-widget-logo">
                                    <a href="#">
                                        <img
                                            src="/assets/images/footer-logo.svg"
                                            alt="title"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="footer-widget">
                                <ul
                                    className="
                                            footer-page-list
                                            list-inline
                                            text-center
                                            mb-2 mb-md-0
                                        "
                                >
                                    <li className="list-inline-item">
                                        <a href="about.html">About</a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="privacy-policy.html">
                                            Privacy Policy
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="terms.html">Terms</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="footer-widget">
                                <ul
                                    className="
                                            footer-social-share
                                            list-inline
                                            text-center text-md-end
                                            m-0
                                        "
                                >
                                    <li className="list-inline-item">
                                        <a
                                            className="twitter"
                                            href="https://instagram.com/"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <svg
                                                width="13"
                                                height="13"
                                                viewBox="0 0 13 13"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M9.86789 3.94232C10.2987 3.94232 10.6479 3.59311 10.6479 3.16232C10.6479 2.73154 10.2987 2.38232 9.86789 2.38232C9.43711 2.38232 9.08789 2.73154 9.08789 3.16232C9.08789 3.59311 9.43711 3.94232 9.86789 3.94232Z"
                                                    fill="#6D727C"
                                                />
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M3.25 6.5C3.25 8.29238 4.70763 9.75 6.5 9.75C8.29238 9.75 9.75 8.29238 9.75 6.5C9.75 4.70763 8.29238 3.25 6.5 3.25C4.70763 3.25 3.25 4.70763 3.25 6.5ZM4.875 6.5C4.875 5.60381 5.60381 4.875 6.5 4.875C7.39619 4.875 8.125 5.60381 8.125 6.5C8.125 7.39619 7.39619 8.125 6.5 8.125C5.60381 8.125 4.875 7.39619 4.875 6.5Z"
                                                    fill="#6D727C"
                                                />
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M3.25 13H9.75C11.4205 13 13 11.4205 13 9.75V3.25C13 1.5795 11.4205 0 9.75 0H3.25C1.5795 0 0 1.5795 0 3.25V9.75C0 11.4205 1.5795 13 3.25 13ZM1.625 3.25C1.625 2.49031 2.49031 1.625 3.25 1.625H9.75C10.5097 1.625 11.375 2.49031 11.375 3.25V9.75C11.375 10.5097 10.5097 11.375 9.75 11.375H3.25C2.47569 11.375 1.625 10.5243 1.625 9.75V3.25Z"
                                                    fill="#6D727C"
                                                />
                                            </svg>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a
                                            className="facebook"
                                            href="https://facebook.com/"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <svg
                                                width="9"
                                                height="15"
                                                viewBox="0 0 9 15"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M2.69904 14.393L2.67857 8.09607H0V5.39738H2.67857V3.59825C2.67857 1.17015 4.17099 0 6.32088 0C7.35069 0 8.23577 0.0772455 8.4937 0.111771V2.64928L7.00264 2.64996C5.83342 2.64996 5.60703 3.20973 5.60703 4.03116V5.39738H8.92857L8.03571 8.09607H5.60702V14.393H2.69904Z"
                                                    fill="#6D727C"
                                                />
                                            </svg>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a
                                            className="linkedin"
                                            href="https://linkedin.com/"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <svg
                                                width="14"
                                                height="14"
                                                viewBox="0 0 14 14"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M1.6875 3.375C2.61948 3.375 3.375 2.61948 3.375 1.6875C3.375 0.75552 2.61948 0 1.6875 0C0.75552 0 0 0.75552 0 1.6875C0 2.61948 0.75552 3.375 1.6875 3.375Z"
                                                    fill="#6D727C"
                                                />
                                                <path
                                                    d="M3.09375 4.5H0.28125C0.126 4.5 0 4.626 0 4.78125V13.2188C0 13.374 0.126 13.5 0.28125 13.5H3.09375C3.249 13.5 3.375 13.374 3.375 13.2188V4.78125C3.375 4.626 3.249 4.5 3.09375 4.5Z"
                                                    fill="#6D727C"
                                                />
                                                <path
                                                    d="M11.4733 4.11247C10.2712 3.70072 8.76769 4.06241 7.866 4.71097C7.83506 4.59003 7.72481 4.50003 7.59375 4.50003H4.78125C4.626 4.50003 4.5 4.62603 4.5 4.78128V13.2188C4.5 13.374 4.626 13.5 4.78125 13.5H7.59375C7.749 13.5 7.875 13.374 7.875 13.2188V7.15503C8.3295 6.76353 8.91506 6.63866 9.39431 6.84228C9.85894 7.0386 10.125 7.51785 10.125 8.15628V13.2188C10.125 13.374 10.251 13.5 10.4062 13.5H13.2188C13.374 13.5 13.5 13.374 13.5 13.2188V7.58985C13.4679 5.27853 12.3806 4.42297 11.4733 4.11247Z"
                                                    fill="#6D727C"
                                                />
                                            </svg>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a
                                            className="youtube"
                                            href="https://youtube.com/"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <svg
                                                width="16"
                                                height="11"
                                                viewBox="0 0 16 11"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M14.2659 0.343069C14.951 0.524413 15.4906 1.05589 15.6745 1.72945C16.0159 2.95882 15.9999 5.52198 15.9999 5.52198C15.9999 5.52198 15.9975 8.07101 15.6665 9.2996C15.4803 9.97238 14.9382 10.5031 14.2539 10.6836C13.002 11.0055 7.99355 11 7.99355 11C7.99355 11 2.99868 10.9945 1.73397 10.6569C1.04806 10.4756 0.508442 9.94411 0.324572 9.27133C-0.00319657 8.05452 0 5.49215 0 5.49215C0 5.49215 0.00319892 2.94234 0.333365 1.71296C0.518834 1.04018 1.07364 0.496937 1.74517 0.317162C2.99788 -0.00548932 8.00554 5.96305e-06 8.00554 5.96305e-06C8.00554 5.96305e-06 13.014 0.00550127 14.2659 0.343069ZM6.40747 3.14409L6.40347 7.85434L10.5701 5.50314L6.40747 3.14409Z"
                                                    fill="#6D727C"
                                                />
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img
                src="/assets/images/main-round-circle2.svg"
                alt="title"
                className="footer-round-shape2"
            />
        </footer>
    );
};

export default Footer;
