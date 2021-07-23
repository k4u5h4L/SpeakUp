import React from "react";

export default function Preloader() {
    return (
        <div className="preloader">
            <div className="lds-ripple">
                <img src="/assets/images/preloader.gif" alt="title" />
            </div>
        </div>
    );
}
