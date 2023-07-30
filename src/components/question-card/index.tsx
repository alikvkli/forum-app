import {AiOutlineArrowDown, AiOutlineArrowUp, AiOutlineComment} from "react-icons/ai";
import {BsFillBookmarkFill} from "react-icons/bs";
import {Link} from "react-router-dom";
import {BiTimeFive} from "react-icons/bi";
import React, {forwardRef} from "react";
import classNames from "classnames";

const QuestionCard = forwardRef<HTMLDivElement, {rounded?:boolean}>((props, ref) => {
    return (
        <div ref={ref} className={classNames("bg-[#fff] border-default w-full min-h-full shadow-md flex", {'rounded-md': props.rounded})}>
            <div className="max-h-full rounded-md flex flex-col items-center gap-4 w-14 bg-default p-4">
                <button className="rounded-full hover:bg-light hover:text-[#fff] p-1 ">
                    <AiOutlineArrowUp size={26}/>
                </button>
                <button className="rounded-full hover:bg-light hover:text-[#fff] px-2 py-2.5 ">
                    <BsFillBookmarkFill size={20}/>
                </button>
                <button className="rounded-full hover:bg-light hover:text-[#fff] p-1 ">
                    <AiOutlineArrowDown size={26}/>
                </button>
                <button className="rounded-full hover:bg-light hover:text-[#fff] p-1 relative ">
                    <AiOutlineComment size={24}/>
                    <span className="absolute -top-1 bg-primary p-0.5 text-[#fff] rounded-full text-xs">10</span>
                </button>
            </div>
            <div className="w-full flex flex-col gap-2 py-4 px-4">
                    <div className="flex-col items-center flex-wrap gap-2 justify-between max-sm:items-start">
                        <div className="flex items-center max-sm:flex-col max-sm:items-start gap-2">
                            <p className="bg-primary rounded-full px-4 py-0.5 text-[#fff] text-sm">Soru</p>
                            <Link  to={`/soru-cevap/1`} className="uppercase flex-none font-semibold">Ek SSD taktıktan sonra</Link>
                        </div>
                        <div className="flex mt-2 items-center gap-2">
                            <BiTimeFive className="text-secondary"/>
                            <p className="text-secondary flex-none text-xs font-light">2 saat önce</p>
                        </div>

                    </div>
                    <div className="w-full h-auto mt-2 flex flex-col items-ba justify-between flex-none">
                        <p className="flex-nowrap text-sm">
                            Merhaba arkadaşlar, 512Gb ssdye sahip bir laptopa sahiptim. Ek olarak 1tb Samsung ssd ve 512
                            GB
                            harddisk taktırdım. Toplamda 3 ssd oldu yani. İşletim sisteminin 1Tb olan ssd de olmasını
                            istiyorum ve diğerlerini de ek olarak depolama olarak kullanacağım. Hangi adımları
                            saglamayaliyim nasıl bir kurulum gerçekleştirmeliyim? Teşekkürler
                        </p>

                    </div>
                    <div className="mt-auto flex items-center gap-2 border-t-default pt-2.5">
                        <img
                            className="rounded-full border-[1px] border-primary/20 w-6"
                            alt="ali kavaklı"
                            src="https://pbs.twimg.com/profile_images/1524468526941188098/_S28Fet6_400x400.jpg"/>
                        <Link className="text-primary text-sm" to="/profil/ali_kvkli">@ali_kvkli <span
                            className="text-secondary">tarafından oluşturuldu.</span></Link>
                    </div>
            </div>
        </div>
    )
})

export default QuestionCard;