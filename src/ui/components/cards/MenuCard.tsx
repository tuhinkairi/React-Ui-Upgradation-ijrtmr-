import React from "react";
import { NavLink } from "react-router-dom";
import { setCurrentPage } from "../../../lib/store/Features/paginationSlice";
import { useAppDispatch } from "../../../lib/store/store";

const MenuCard = React.forwardRef<HTMLDivElement, { links: {title:string,link:string}[], hide:()=>void}>(({ links, hide}, ref) => {
    const dispatch = useAppDispatch()
    return (
        <div ref={ref} onMouseLeave={hide} className="absolute top-8 items-center justify-center hidden bg-gradient-radial z-10 from-black via-gray-800 to-black">
            <div className="bg-white rounded-2xl shadow-xl p-6 w-60">
                <ul className="space-y-4">
                    {links.map((item, index) => (
                        <li key={index} className="text-gray-600 font-medium hover:text-primary transition-colors duration-200">
                            <NavLink onClick={()=>dispatch(setCurrentPage(1))}  className={({isActive})=> isActive ? 'text-primary' : 'text-gray-600 hover:text-primary transition-colors duration-200'} to={item.link}>{item.title}</NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
});

export default MenuCard;
