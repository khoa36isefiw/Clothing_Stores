import React from 'react';
import { FaGooglePay, FaApplePay, FaPaypal, FaMoneyBill } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Text, FooterTexts, List } from './data';
import { useCallback } from 'react';
import { FaRegClock, FaRocket } from 'react-icons/fa6';
import { Divider } from '@mui/material';

const Footer = () => {
    const paymentMethods = [
        { name: 'Google Pay', icon: <FaGooglePay size={48} color="#4285F4" /> },
        { name: 'Apple Pay', icon: <FaApplePay size={48} color="#000000" /> },
        { name: 'PayPal', icon: <FaPaypal size={32} color="#003087" /> },
        { name: 'Momo', icon: <FaMoneyBill size={32} color="#00A9E0" /> },
    ];
    const contacts = ['Privacy Policy', 'Return Policy', 'Shipping Policy', 'Terms Of Service'];

    return (
        <footer className="text-white  left-0 right-0 bottom-0">
            <div className="text-[#333] text-[24px] font-bold ml-8 py-8">Brand Name</div>
            <div className="ml-48 mr-48 mb-8 py-8">
                <Divider />
            </div>
            <div className="container mx-auto flex items-center justify-between h-full text-[#11151CBF]">
                <div className="flex flex-col  gap-6 mb-[64px] ">
                    {/* company info  */}
                    <h1 className="text-[20px] font-display font-bold ">
                        {FooterTexts.companyInfo.caption}
                    </h1>
                    <ul className="flex flex-col gap-2">
                        {FooterTexts.companyInfo.quickLinks.map((link, index) => (
                            <List className="" key={index}>
                                <Link
                                    to={link.url}
                                    className="transition-all duration-200 hover:text-[#ff8503] cursor-pointer"
                                >
                                    {link.name}
                                </Link>
                            </List>
                        ))}
                    </ul>
                </div>
                {/* products  */}
                <div className="flex flex-col  gap-6 mb-[64px] ">
                    <h1 className="text-[20px] font-display font-bold ">
                        {FooterTexts.products.caption}
                    </h1>
                    <ul className="flex flex-col gap-2">
                        {FooterTexts.products.quickLinks.map((link, index) => (
                            <List className="" key={index}>
                                <Link
                                    to={link.url}
                                    className="transition-all duration-200 hover:text-[#ff8503] cursor-pointer"
                                >
                                    {link.name}
                                </Link>
                            </List>
                        ))}
                    </ul>
                </div>
                {/* collection  */}
                <div className="flex flex-col  gap-6 mb-[64px] ">
                    <h1 className="text-[20px] font-display font-bold ">
                        {FooterTexts.collections.caption}
                    </h1>
                    <ul className="flex flex-col gap-2">
                        {FooterTexts.collections.quickLinks.map((link, index) => (
                            <List className="" key={index}>
                                <Link
                                    to={link.url}
                                    className="transition-all duration-200 hover:text-[#ff8503] cursor-pointer"
                                >
                                    {link.name}
                                </Link>
                            </List>
                        ))}
                    </ul>
                </div>
                {/* support  */}
                <div className="flex flex-col  gap-6 mb-[64px] ">
                    <h1 className="text-[20px] font-display font-bold ">
                        {FooterTexts.support.caption}
                    </h1>
                    <ul className="flex flex-col gap-2">
                        {FooterTexts.support.quickLinks.map((link, index) => (
                            <List className="" key={index}>
                                <Link
                                    to={link.url}
                                    className="transition-all duration-200 hover:text-[#ff8503] cursor-pointer"
                                >
                                    {link.name}
                                </Link>
                            </List>
                        ))}
                    </ul>
                </div>
                {/* sign up  */}
                <div className="flex flex-col gap-4 mb-[54px] cursor-pointer">
                    <h1 className="text-[20px] font-display font-bold mt-[1px]">
                        Sign Up to Our Newsletter
                    </h1>
                    <div className="flex flex-col relative mt-4">
                        <input
                            type="text"
                            className="h-[50px] border-solid border-[#d3d3d3] p-6 rounded-md"
                            placeholder="Your email"
                        />
                        <div className="bg-[#23856D] absolute flex justify-center items-center right-0 top-0 h-full w-[100px] rounded-md">
                            <p className="text-white ">Subscribe</p>
                        </div>
                    </div>
                    <p className="text-[#d1d1d1] mb-[2px]">
                        Be always updated with the lastest exclusive news from us
                    </p>
                </div>
            </div>
            <div className="text-center bg-[#d3d3d3] p-6">
                <p className="mt-6 text-[18px]">COPYRIGHT 2024 &copy; All Right Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
