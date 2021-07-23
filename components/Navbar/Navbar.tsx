import React from "react";

const Navbar = () => {
    return (
        <header className="header-area header-gradient">
            <div className="container">
                <div className="header-navbar navbar navbar-expand-lg">
                    <a className="navbar-brand" href="index.html">
                        <img src="/assetsimages/logo.svg" alt="images" />
                    </a>
                    <div className="collapse navbar-collapse" id="navbar-menu">
                        <nav className="header-main-menu ms-auto">
                            <ul className="navbar-nav">
                                <li className="nav-item active">
                                    <a className="nav-link toogler" href="#">
                                        Home
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                href="index.html"
                                            >
                                                Home V1
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                href="index2.html"
                                            >
                                                Home V2
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="about.html">
                                        About
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link toogler" href="#">
                                        Pages
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                href="about.html"
                                            >
                                                About
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                href="category.html"
                                            >
                                                Category
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                href="author.html"
                                            >
                                                Author
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                href="authors.html"
                                            >
                                                Authors
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                href="tags.html"
                                            >
                                                Tags
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                href="privacy-policy.html"
                                            >
                                                Privacy Policy
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                href="terms.html"
                                            >
                                                Terms
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                href="single.html"
                                            >
                                                Blog Details
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                href="single-podcast.html"
                                            >
                                                Podcast Details
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                href="elements.html"
                                            >
                                                Elements
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                href="404.html"
                                            >
                                                404
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="podcast.html">
                                        Podcast
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="contact.html">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <ul className="header-rightbar navbar-nav">
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#headermodal"
                            >
                                <div className="search-modal">
                                    <img
                                        src="/assetsimages/search-icon.svg"
                                        alt="title"
                                    />
                                </div>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <div className="burger-box">
                                    <div className="burger-inner"></div>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
                {/* <!-- Modal --> */}
                <div className="modal" id="headermodal">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="container">
                                <div className="container-wrapper">
                                    <div className="modal-body">
                                        <div className="headermodal-form">
                                            <form action="#">
                                                <span>
                                                    <img
                                                        src="/assetsimages/search-icon.svg"
                                                        alt="title"
                                                    />
                                                </span>
                                                <input
                                                    type="text"
                                                    className="control-form"
                                                    placeholder="Search"
                                                />
                                            </form>
                                            <div
                                                className="search-close"
                                                data-bs-dismiss="modal"
                                            >
                                                <img
                                                    src="/assetsimages/cancel.svg"
                                                    alt="title"
                                                />
                                            </div>
                                        </div>
                                        <h4 className="mb-3">May we suggest</h4>
                                        <div className="search-suggestions mb-4">
                                            <a
                                                className="btn btn-light"
                                                href="podcast.html"
                                            >
                                                Technology
                                            </a>
                                            <a
                                                className="btn btn-light"
                                                href="podcast.html"
                                            >
                                                Episode 10
                                            </a>
                                            <a
                                                className="btn btn-light"
                                                href="podcast.html"
                                            >
                                                Conversation
                                            </a>
                                            <a
                                                className="btn btn-light"
                                                href="podcast.html"
                                            >
                                                Audio
                                            </a>
                                        </div>
                                        <h4 className="mb-3">Picked for you</h4>
                                        <div className="row">
                                            <div className="col-md-6 col-lg-4">
                                                <article className="search-block">
                                                    <img
                                                        src="/assetsimages/podcast/1.jpg"
                                                        alt="title"
                                                    />
                                                    <div
                                                        className="
                                                                search-block-content
                                                            "
                                                    >
                                                        <div
                                                            className="
                                                                    search-block-meta
                                                                "
                                                        >
                                                            <span>Episode</span>
                                                        </div>
                                                        <h6>
                                                            <a href="single.html">
                                                                Audio Stories
                                                                Design Tips to
                                                                Create Stunning
                                                                Visuals
                                                            </a>
                                                        </h6>
                                                    </div>
                                                </article>
                                            </div>
                                            <div className="col-md-6 col-lg-4">
                                                <article className="search-block">
                                                    <img
                                                        src="/assetsimages/podcast/2.jpg"
                                                        alt="title"
                                                    />
                                                    <div
                                                        className="
                                                                search-block-content
                                                            "
                                                    >
                                                        <div
                                                            className="
                                                                    search-block-meta
                                                                "
                                                        >
                                                            <span>
                                                                Technology
                                                            </span>
                                                        </div>
                                                        <h6>
                                                            <a href="single.html">
                                                                Audio Stories
                                                                Design Tips to
                                                                Create Stunning
                                                                Visuals
                                                            </a>
                                                        </h6>
                                                    </div>
                                                </article>
                                            </div>
                                            <div className="col-md-6 col-lg-4">
                                                <article className="search-block">
                                                    <img
                                                        src="/assetsimages/podcast/3.jpg"
                                                        alt="title"
                                                    />
                                                    <div
                                                        className="
                                                                search-block-content
                                                            "
                                                    >
                                                        <div
                                                            className="
                                                                    search-block-meta
                                                                "
                                                        >
                                                            <span>Audio</span>
                                                        </div>
                                                        <h6>
                                                            <a href="single.html">
                                                                Audio Stories
                                                                Design Tips to
                                                                Create Stunning
                                                                Visuals
                                                            </a>
                                                        </h6>
                                                    </div>
                                                </article>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="sidebar-navbar">
                    <a href="index.html" className="navbar-logo">
                        <img src="/assetsimages/logo.svg" alt="title" />
                    </a>
                    <h5 className="mb-1">Instagram</h5>
                    <div className="row mb-5">
                        <div className="col-6">
                            <a href="#" className="sidebar-feeds mt-3">
                                <img
                                    src="/assetsimages/podcast/2.jpg"
                                    alt="title"
                                />
                            </a>
                        </div>
                        <div className="col-6">
                            <a href="#" className="sidebar-feeds mt-3">
                                <img
                                    src="/assetsimages/podcast/1.jpg"
                                    alt="title"
                                />
                            </a>
                        </div>
                        <div className="col-6">
                            <a href="#" className="sidebar-feeds mt-3">
                                <img
                                    src="/assetsimages/podcast/3.jpg"
                                    alt="title"
                                />
                            </a>
                        </div>
                        <div className="col-6">
                            <a href="#" className="sidebar-feeds mt-3">
                                <img
                                    src="/assetsimages/podcast/4.jpg"
                                    alt="title"
                                />
                            </a>
                        </div>
                    </div>
                    <h5 className="mb-3">Find Us</h5>
                    <div className="sidebar-contact mb-5">
                        <p>Washton, NY 3234</p>
                        <p>United States</p>
                        <p>+286 544 243</p>
                    </div>
                    <h5 className="mb-3">Share Us</h5>
                    <ul className="share-link-social list-inline">
                        <li className="list-inline-item">
                            <a
                                className="twitter"
                                href="https://twitter.com/"
                                target="_blank"
                            >
                                <svg
                                    width="16"
                                    height="13"
                                    viewBox="0 0 16 13"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M15.9914 1.54204C15.4033 1.80262 14.7716 1.97869 14.1075 2.05828C14.7927 1.64824 15.3054 1.00289 15.5498 0.242638C14.906 0.625056 14.2014 0.894236 13.4666 1.03848C12.9724 0.510874 12.3179 0.161171 11.6047 0.0436601C10.8914 -0.0738508 10.1593 0.0474051 9.52206 0.388602C8.88478 0.729799 8.37798 1.27185 8.08033 1.93059C7.78269 2.58934 7.71085 3.32792 7.87598 4.03167C6.57143 3.96617 5.29523 3.6271 4.13021 3.03646C2.96518 2.44581 1.93737 1.61681 1.11347 0.60323C0.831756 1.08918 0.669772 1.65261 0.669772 2.25266C0.669458 2.79284 0.802481 3.32474 1.05704 3.80118C1.3116 4.27762 1.67983 4.68386 2.12904 4.98386C1.60807 4.96728 1.09859 4.82651 0.643009 4.57327V4.61552C0.642957 5.37315 0.905025 6.10746 1.38475 6.69386C1.86447 7.28025 2.5323 7.68262 3.27491 7.83268C2.79162 7.96348 2.28493 7.98274 1.7931 7.88902C2.00262 8.54092 2.41075 9.11097 2.96035 9.51938C3.50996 9.9278 4.17351 10.1541 4.85813 10.1667C3.69595 11.079 2.26066 11.5739 0.783161 11.5717C0.521437 11.5718 0.259934 11.5565 0 11.5259C1.49975 12.4902 3.24557 13.002 5.02857 13C11.0643 13 14.3638 8.001 14.3638 3.66545C14.3638 3.52459 14.3603 3.38233 14.354 3.24147C14.9958 2.77733 15.5498 2.20258 15.99 1.54415L15.9914 1.54204Z"
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
                            >
                                <svg
                                    width="9"
                                    height="13"
                                    viewBox="0 0 9 13"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M2.43782 13L2.41933 7.3125H0V4.875H2.41933V3.25C2.41933 1.0569 3.76731 0 5.70912 0C6.63926 0 7.43868 0.0697694 7.67164 0.100953V2.39287L6.3249 2.39349C5.26884 2.39349 5.06436 2.89908 5.06436 3.64101V4.875H8.06443L7.25799 7.3125H5.06435V13H2.43782Z"
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
                            >
                                <svg
                                    width="13"
                                    height="13"
                                    viewBox="0 0 13 13"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M1.625 3.25C2.52246 3.25 3.25 2.52246 3.25 1.625C3.25 0.727537 2.52246 0 1.625 0C0.727537 0 0 0.727537 0 1.625C0 2.52246 0.727537 3.25 1.625 3.25Z"
                                        fill="#6D727C"
                                    />
                                    <path
                                        d="M2.97917 4.33325H0.270833C0.121333 4.33325 0 4.45459 0 4.60409V12.7291C0 12.8786 0.121333 12.9999 0.270833 12.9999H2.97917C3.12867 12.9999 3.25 12.8786 3.25 12.7291V4.60409C3.25 4.45459 3.12867 4.33325 2.97917 4.33325Z"
                                        fill="#6D727C"
                                    />
                                    <path
                                        d="M11.0483 3.96024C9.89075 3.56374 8.44288 3.91203 7.57459 4.53657C7.54479 4.42011 7.43863 4.33345 7.31242 4.33345H4.60409C4.45459 4.33345 4.33325 4.45478 4.33325 4.60428V12.7293C4.33325 12.8788 4.45459 13.0001 4.60409 13.0001H7.31242C7.46192 13.0001 7.58325 12.8788 7.58325 12.7293V6.89011C8.02092 6.51311 8.58479 6.39286 9.04629 6.58895C9.49371 6.77799 9.74992 7.23949 9.74992 7.85428V12.7293C9.74992 12.8788 9.87125 13.0001 10.0208 13.0001H12.7291C12.8786 13.0001 12.9999 12.8788 12.9999 12.7293V7.30882C12.969 5.08311 11.922 4.25924 11.0483 3.96024Z"
                                        fill="#6D727C"
                                    />
                                </svg>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a
                                className="pinterest"
                                href="https://www.pinterest.com/"
                                target="_blank"
                            >
                                <svg
                                    width="11"
                                    height="13"
                                    viewBox="0 0 11 13"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M4.37816 8.59716C4.03627 10.3872 3.61963 12.1032 2.38401 12.9995C2.00312 10.2943 2.94365 8.26306 3.38109 6.10641C2.63555 4.85194 3.47078 2.32869 5.0418 2.95073C6.97551 3.71511 3.36744 7.61243 5.78928 8.09992C8.31838 8.60756 9.35056 3.71251 7.78214 2.12069C5.51694 -0.178956 1.18738 2.06675 1.72037 5.35893C1.84972 6.16361 2.68105 6.40735 2.05251 7.51818C0.602395 7.19709 0.169504 6.05311 0.225403 4.52824C0.315101 2.0323 2.4672 0.285784 4.62646 0.0433389C7.35705 -0.262805 9.91995 1.04627 10.2742 3.61436C10.6726 6.51395 9.04181 9.65468 6.12143 9.42849C5.32974 9.36674 4.99825 8.97415 4.37816 8.59716Z"
                                        fill="#6D727C"
                                    />
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <img
                src="/assetsimages/main-round-circle2.svg"
                alt="title"
                className="header-round-shape"
            />
        </header>
    );
};

export default Navbar;
