import React from "react";

const Footer = () => {
    return (
        <div className="footer bg-white shadow mt-20" id="social">
            <div className="container mx-auto px-4 py-2 flex items-center justify-between">
                <p className="py-4">&copy; Copyright 2023 <span className="font-bold">Ngoding Masteri</span></p>
                <div className="social-footer flex items-center sm:gap-7 gap-2">
                    <a href="#">
                        <i className="ri-facebook-circle-fill text-2xl"></i>
                    </a>
                    <a href="#">
                        <i className="ri-instagram-fill text-2xl"></i>
                    </a>
                    <a href="#">
                        <i className="ri-twitter-fill text-2xl"></i>
                    </a>
                    <a href="#">
                        <i className="ri-youtube-fill text-2xl"></i>
                    </a>
                    <a href="#">
                        <i className="ri-linkedin-box-fill text-2xl"></i>
                    </a>
                    <a href="#">
                        <i className="ri-reddit-box-fill text-2xl"></i>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
