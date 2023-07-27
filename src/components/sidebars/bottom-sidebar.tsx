import {AiOutlineMenu} from "react-icons/ai";

export default function  BottomSideBar(){
    return (
        <aside className="max-sm:flex shadow-md border-t-default fixed bg-[#fff] w-full bottom-0 h-14 hidden items-center justify-center z-10 p-4">
            <button className="absolute -top-4 bg-primary shadow-lg  drop-shadow-xl p-2 rounded-full hover:bg-light">
                <AiOutlineMenu className="text-[#fff]" size={24}/>
            </button>
        </aside>
    )
}