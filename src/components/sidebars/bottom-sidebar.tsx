import {AiOutlineMenu} from "react-icons/ai";
import {BiSearchAlt} from "react-icons/bi";
import classNames from "classnames";
import {useAppSelector} from "../../hooks";

export default function  BottomSideBar(){
    const {menu} = useAppSelector(state => state.config);
    return (
        <aside className={classNames("max-sm:flex shadow-md border-t-default fixed bg-[#fff] w-full bottom-0 h-14 sm:hidden items-center justify-center z-10 p-4", {
            '!hidden': menu
        })}>
            <div className="relative w-full flex flex-row-reverse justify-between items-center">


                <div>
                    <button>
                        <BiSearchAlt size={31}/>
                    </button>
                </div>


            </div>

        </aside>
    )
}