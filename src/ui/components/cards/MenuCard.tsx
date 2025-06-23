import React from "react";
import { NavLink } from "react-router-dom";

const MenuCard = React.forwardRef<HTMLDivElement, { links: string[]}>(({ links}, ref) => {
    const handelHide = () => {
        const pop = ref as React.RefObject<HTMLDivElement>;
        if (pop.current) {
            pop.current.classList.toggle("hidden");
        }        
    }
    return (
        <div ref={ref} onMouseLeave={handelHide} className="absolute top-6 items-center justify-center hidden bg-gradient-radial from-black via-gray-800 to-black">
            <div className="bg-white rounded-2xl shadow-xl p-6 w-72">
                <ul className="space-y-4">
                    {links.map((item, index) => (
                        <li key={index} className="text-gray-600 text-base font-medium">
                            <NavLink className={({isActive})=>isActive?'text-primary':""} to={item}>{item}</NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
});

export default MenuCard;
