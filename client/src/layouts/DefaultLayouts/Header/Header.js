import React from 'react';
import LuanLogo from '../../../assets/images/luanmeme.jpg';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { IoSearch, IoPersonOutline, IoHeartOutline, IoCartOutline } from 'react-icons/io5';

function Header() {
    return (
        <div className="bg-[#333]">
            <div className="mx-16 flex items-center justify-between h-[120px]">
                {/* Logo */}
                <div className="w-[33.333%]">
                    <a href="/">
                        <img alt="Logo Websites" src={LuanLogo} className="h-[75px] w-[75px]" />
                    </a>
                </div>
                {/* features */}
                <div className="flex-1 w-[33.333%]">
                    <div className="flex text-white font-bold text-[24px] items-center justify-between ">
                        <p className="cursor-pointer">Home</p>
                        <p className="flex items-center cursor-pointer">
                            Shop{' '}
                            <span className="ml-4">
                                <FaChevronDown />
                            </span>
                        </p>
                        <p className="cursor-pointer">Blog</p>
                        <p className="cursor-pointer">About</p>
                    </div>
                </div>
                {/* icon */}
                <div className="text-[24px] text-white flex items-center justify-end w-[33.333%]">
                    <div className="mr-16">
                        <IoSearch />
                    </div>
                    <div className="mr-16">
                        <IoPersonOutline />
                    </div>
                    <div className="mr-16">
                        <IoHeartOutline />
                    </div>
                    <div>
                        <IoCartOutline />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
