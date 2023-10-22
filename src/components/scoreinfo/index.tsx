
import { FC, ReactNode } from "react";
import { scoreInfoData } from "@/interface";

type ScoreInfoProps = {
    scoredata?: scoreInfoData
}

const ScoreInfo: FC<ScoreInfoProps> = ({ scoredata }) => {
    return (
        <>
            <div className="flex w-auto">
                <div className="flex w-[30px] h-[30px] justify-center absolute">
                    <img src={scoredata?.image} className="w-full h-full" />
                    <img src="/images/Frame1000005141.png" className="absolute top-0 right-0 w-[15px] h-[15px] -mt-[5px]"></img>
                </div>
                <div className="flex justify-center font-bold items-center text-white text-[12px] p-1 w-auto h-[26px] mt-[1px] pl-[10px] ml-[20px] border-solid border-t-2 border-b-2 border-r-2 border-[#587481] rounded-br-[4px] rounded-tr-[4px]">
                    {scoredata?.score}
                </div>
            </div>
        </>
    )
}

export default ScoreInfo;