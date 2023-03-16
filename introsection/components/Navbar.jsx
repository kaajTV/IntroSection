'use client';

import "flowbite";

const Navbar = () => (
    <nav className="flex flex-row justify-between items-center w-full py-4 pl-8 pr-8 bg-transparent">
        <div className="flex flex-wrap items-center justify-between gap-12">
            <a href="#" className="flex items-center cursor-pointer">
                <img src="/logo.svg" alt="Logo" className="h-full w-full" />
            </a>
            <div className="w-full md:block md:w-auto relative" id="navbar-dropdown">
                <ul className="flex flex-row justify-center items-center">
                    <div>
                        <li>
                            <button className="flex items-center w-full py-2 pl-3 pr-4 cursor-pointer text-gray-100 font-medium text-lg" id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar">Features <svg class="w-5 h-5 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
                        </li>
                        {/* DropdownMenu */}
                        <div className="z-10 hidden shadow w-44 absolute top-full left-0 rounded-lg drop-shadow-md" id="dropdownNavbar">
                            <ul className="py-2" aria-labelledby="dropdownLargeButton">
                                <li className="flex text-left">
                                    <a href="#" className="flex items-center w-full gap-4 px-8 py-2 cursor-pointer text-gray-100 font-medium text-base hover:underline">
                                        <img src="/icon-todo.svg" alt="Todo Icon" className="h-4 w-4" />
                                        Todo List
                                    </a>
                                </li>
                                <li className="flex text-left">
                                    <a href="#" className="flex items-center w-full gap-4 px-8 py-2 cursor-pointer text-gray-100 font-medium text-base hover:underline">
                                        <img src="/icon-calendar.svg" alt="Calendar Icon" className="h-4 w-4" />
                                        Calendar
                                    </a>
                                </li>
                                <li className="flex text-left">
                                    <a href="#" className="flex items-center w-full gap-4 px-8 py-2 cursor-pointer text-gray-100 font-medium text-base hover:underline">
                                        <img src="/icon-reminders.svg" alt="Reminders Icon" className="h-4 w-4" />
                                        Reminders
                                    </a>
                                </li>
                                <li className="flex text-left">
                                    <a href="#" className="flex items-center w-full gap-4 px-8 py-2 cursor-pointer text-gray-100 font-medium text-base hover:underline">
                                        <img src="/icon-planning.svg" alt="Planning Icon" className="h-4 w-4" />
                                        Planning
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <li>
                            <button className="flex items-center w-full py-2 pl-3 pr-4 text-gray-100 font-medium text-lg" id="dropdownNavbarLink2" data-dropdown-toggle="dropdownNavbar2">Company <svg class="w-5 h-5 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
                        </li>
                        {/* DropdownMenu */}
                        <div className="z-10 shadow w-32 absolute top-full left-20 rounded-lg drop-shadow-md" id="dropdownNavbar2">
                            <ul className="py-2" aria-labelledby="dropdownLargeButton2">
                                <li>
                                    <a href="#" className="flex items-center text-left w-full px-8 py-2 cursor-pointer text-gray-100 font-medium text-base hover:underline">
                                        History
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center text-left w-full px-8 py-2 whitespace-nowrap cursor-pointer text-gray-100 font-medium text-base hover:underline">
                                        Our Team
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center text-left w-full px-8 py-2 cursor-pointer text-gray-100 font-medium text-base hover:underline">
                                        Blog
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex gap-10">
                        <li className="ml-4">
                            <a href="#" className="text-gray-100 font-medium text-lg cursor-pointer">
                                Careers
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-100 font-medium text-lg cursor-pointer">
                                About
                            </a>
                        </li>
                    </div>
                </ul>
            </div>
        </div>
        <div className="flex justify-center items-center">
            <button className="pr-8 text-gray-100 font-medium text-lg cursor-pointer">Login</button>
            <button className="border-2 border-gray-100 rounded-2xl py-2 px-4 cursor-pointer text-gray-100 font-medium text-lg">Register</button>
        </div>
    </nav>
)

export default Navbar;