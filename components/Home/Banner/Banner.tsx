import React from "react";

const Banner = () => {
    return (
        <div className="banner-area my-7 my-lg-10">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6 col-lg-5 offset-lg-1 order-md-1">
                        <div
                            className="banner-image m-auto ms-md-auto mb-4"
                            data-aos="fade-left"
                        >
                            <img
                                src="/assets/images/podcast-bro.svg"
                                alt="title"
                            />
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 order-md-12">
                        <div className="banner-content text-center text-md-start">
                            <h2 className="display-4 mb-4 d-none d-lg-block">
                                <del>Read</del> <span> </span>
                                <span className="text-primary">
                                    Listen<span> </span>
                                </span>
                                to your favorite PDFs
                            </h2>
                            <h2 className="display-4 d-lg-none mb-4">
                                Listen to your favorite PDFs
                            </h2>
                            <p className="mb-4">
                                Just upload your PDF and start listening to it!
                            </p>
                            {/* <form
                                className="banner-newsletter m-auto ms-md-0"
                                action="#"
                            >
                                <div className="input-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter your email"
                                    />
                                    <button className="btn btn-primary">
                                        Subscribe
                                    </button>
                                </div>
                            </form> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
