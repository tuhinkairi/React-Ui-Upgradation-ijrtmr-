import { X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { about_menu, auther_menu, conference_menu, thesis_menu } from "../../../data/listingSection";
import { useAppSelector } from "../../../lib/store/store";
import { useEffect, useState } from "react";

const MenuMoblieCard = ({ onClose }: { onClose: () => void }) => {
    const activeIssue = useAppSelector(s => s.archiveSection.indexPage);
      const [IssueUrl, setIssueUrl] = useState<string>("/current-issue");
      // update the current issue url
      useEffect(()=>{
        setIssueUrl( activeIssue &&
        Array.isArray(activeIssue) &&
        activeIssue[0] &&
        activeIssue[0].volumes &&
        Array.isArray(activeIssue[0].volumes) &&
        activeIssue[0].volumes[0] &&
        activeIssue[0].volumes[0].issue &&
        Array.isArray(activeIssue[0].volumes[0].issue) &&
        activeIssue[0].volumes[0].issue[0]
          ? `/current-issue/paperlist?year=${activeIssue[0].year}&volume=${activeIssue[0].volumes[0].volume}&issue=${activeIssue[0].volumes[0].issue[0]}`
          : "/current-issue")
      },[activeIssue])
    return (
        <div className="fixed inset-0 bg-white z-[9999] p-6 overflow-y-auto">
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
                    <ul className="pl-4 space-y-4 mt-3 text-gray-600 text-sm xl:text-base 2xl:text-lg">
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
                    <ul className="pl-4 space-y-4 mt-3 text-gray-600 text-sm xl:text-base 2xl:text-lg">
                        <>
                            {auther_menu.map((item, idx) => {

                                return <li key={idx}><NavLink className={({ isActive }) => (isActive ? "text-primary w-full" : "hover:text-primary w-full")} to={item.link} onClick={onClose}>{item.title}</NavLink></li>
                            })}
                        </>

                    </ul>
                </div>

                {/* Single Links */}
                <NavLink to={IssueUrl} className="block font-semibold" onClick={onClose}>
                    Current Issue
                </NavLink>
                <NavLink to="/archives" className="block font-semibold" onClick={onClose}>
                    Archives
                </NavLink>
                {/* conference */}
                <div>
                    <div className="font-semibold text-black">Conference</div>
                    <ul className="pl-4 space-y-4 mt-3 text-gray-600 text-sm xl:text-base 2xl:text-lg">
                        <>
                            {conference_menu.map((item, idx) => {
                                return <li key={idx}><NavLink className={({ isActive }) => (isActive ? "text-primary w-full" : "hover:text-primary w-full")} to={item.link} onClick={onClose}>{item.title}</NavLink></li>
                            })}
                        </>

                    </ul>
                </div>

                {/* Thesis */}
                <div>
                    <div className="font-semibold text-black">Thesis</div>
                    <ul className="pl-4 space-y-4 mt-3 text-gray-600 text-sm xl:text-base 2xl:text-lg">
                        <>
                            {thesis_menu.map((item, idx) => {
                                return <li key={idx}><NavLink className={({ isActive }) => (isActive ? "text-primary w-full" : "hover:text-primary w-full")} to={item.link} onClick={onClose}>{item.title}</NavLink></li>
                            })}
                        </>

                    </ul>
                </div>

                <NavLink to="/blogs" className="block font-semibold" onClick={onClose}>
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
