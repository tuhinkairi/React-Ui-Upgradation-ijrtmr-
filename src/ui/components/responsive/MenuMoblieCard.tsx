import { X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { about_menu, auther_menu, thesis_menu } from "../../../data/listingSection";

const MenuMoblieCard = ({ onClose }: { onClose: () => void }) => {
    return (
        <div className="fixed inset-0 bg-white z-50 p-6 overflow-y-auto">
            {/* Close Button */}
            <div className="flex justify-end">
                <button onClick={onClose} className="p-2">
                    <X className="w-6 h-6" />
                </button>
            </div>

            {/* Navigation Links */}
            <nav className="space-y-6">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `block font-medium ${isActive ? "text-orange-500" : "text-black"
                        }`
                    }
                    onClick={onClose}
                >
                    Home
                </NavLink>

                {/* About Us */}
                <div>
                    <div className="font-semibold text-black">About Us</div>
                    <ul className="pl-4 space-y-4 mt-3 text-gray-600 text-sm">
                        <>
                            {about_menu.map((item, idx) => {
                                return <li key={idx}><NavLink className={({ isActive }) => (isActive ? "text-primary w-full" : "hover:text-primary w-full")} to={item.link} onClick={onClose}>{item.title}</NavLink></li>
                            })}
                        </>

                    </ul>
                </div>

                {/* For Authors */}
                <div>
                    <div className="font-semibold text-black">For Authors</div>
                    <ul className="pl-4 space-y-4 mt-3 text-gray-600 text-sm">
                        <>
                            {auther_menu.map((item, idx) => {

                                return <li key={idx}><NavLink className={({ isActive }) => (isActive ? "text-primary w-full" : "hover:text-primary w-full")} to={item.link} onClick={onClose}>{item.title}</NavLink></li>
                            })}
                        </>

                    </ul>
                </div>

                {/* Single Links */}
                <NavLink to="/current-issue" className="block font-semibold" onClick={onClose}>
                    Current Issue
                </NavLink>
                <NavLink to="/archives" className="block font-semibold" onClick={onClose}>
                    Archives
                </NavLink>
                <NavLink to="/conference" className="block font-semibold" onClick={onClose}>
                    Conference
                </NavLink>

                {/* Thesis */}
                <div>
                    <div className="font-semibold text-black">Thesis</div>
                    <ul className="pl-4 space-y-4 mt-3 text-gray-600 text-sm">
                        <>
                            {thesis_menu.map((item, idx) => {
                                return <li key={idx}><NavLink className={({ isActive }) => (isActive ? "text-primary w-full" : "hover:text-primary w-full")} to={item.link} onClick={onClose}>{item.title}</NavLink></li>
                            })}
                        </>

                    </ul>
                </div>

                <NavLink to="/blog" className="block font-semibold" onClick={onClose}>
                    Blogs
                </NavLink>
                <NavLink to="/contact-us" className="block font-semibold" onClick={onClose}>
                    Contact Us
                </NavLink>
            </nav>
        </div>
    );
};

export default MenuMoblieCard;
