import {Link} from "react-router-dom";
import {BiDislike, BiLike} from "react-icons/bi";
import {MdOutlineInsertComment} from "react-icons/md";
import React, {useState} from "react";
import {motion, AnimatePresence} from "framer-motion";

const Comment = () => {
    const [isReply, setIsReply] = useState<boolean>(false)

    return (
        <div
            className="flex flex-col gap-2 relative not-last:border-b-[1px] border-b-default last:border-none pb-2 w-full">
            <div className="flex gap-2 items-center">
                <img
                    className="rounded-full border-[1px] border-primary/20 w-6"
                    alt="ali kavaklı"
                    src="https://pbs.twimg.com/profile_images/1524468526941188098/_S28Fet6_400x400.jpg"/>
                <Link to="/profil/alikvkli"
                      className="text-sm font-semibold/50 hover:underline">ali_kvkli</Link>
                <span className="text-secondary text-sm max-sm:hidden">&#183;</span>
                <p className="text-secondary text-xs">2 saat önce</p>
            </div>
            <p className="text-sm">Youtube dan bakabilirsin</p>
            <div className="flex items-center gap-2.5">
                <button
                    className="hover:bg-primary hover:text-[#fff] hover:rounded-full p-1 transition-all">
                    <BiLike/>
                </button>
                <button
                    className="hover:bg-primary hover:text-[#fff] hover:rounded-full p-1 transition-all">
                    <BiDislike/>
                </button>
                <button
                    onClick={() => setIsReply(!isReply)}
                    className="hover:bg-primary hover:text-[#fff] hover:rounded-full p-1 transition-all">
                    <MdOutlineInsertComment size={15}/>
                </button>
            </div>
            <AnimatePresence>
                {isReply && (
                    <motion.div
                        initial={{opacity: 0, height: 0}}
                        animate={{opacity: 1, height: "auto"}}
                        exit={{opacity: 0, height: 0}}
                        transition={{duration: 0.3}}
                        className="flex flex-col items-end gap-2">
                        <textarea placeholder="Yorumunuzu yazınız..."
                                  className="w-full rounded-md resize-none bg-[#ebedef] font-light outline-primary outline-offset-1 outline-1 p-2 text-xs"
                                  rows={5}/>

                        <button className="bg-primary text-xs px-6 hover:bg-light py-1 text-[#fff] rounded-md">Yanıtla</button>
                    </motion.div>
                )}
            </AnimatePresence>
            <div
                className="flex pl-8 mt-4 flex-col gap-2 relative not-last:border-b-[1px] border-b-default last:border-none pb-2 w-full">
                <div className="flex gap-2 items-center">
                    <img
                        className="rounded-full border-[1px] border-primary/20 w-6"
                        alt="ali kavaklı"
                        src="https://pbs.twimg.com/profile_images/1524468526941188098/_S28Fet6_400x400.jpg"/>
                    <Link to="/profil/alikvkli"
                          className="text-sm font-semibold/50 hover:underline">ali_kvkli2</Link>
                    <span className="text-secondary text-sm max-sm:hidden">&#183;</span>
                    <p className="text-secondary text-xs">2 saat önce</p>
                </div>
                <p className="text-sm">Youtube dan bakabilirsin2</p>
                <div className="flex items-center gap-2.5">
                    <button
                        className="hover:bg-primary hover:text-[#fff] hover:rounded-full p-1 transition-all">
                        <BiLike/>
                    </button>
                    <button
                        className="hover:bg-primary hover:text-[#fff] hover:rounded-full p-1 transition-all">
                        <BiDislike/>
                    </button>
                </div>

            </div>


        </div>
    )
}

export default Comment;