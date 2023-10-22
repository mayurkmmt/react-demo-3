import { FC } from "react";
import { clubInfoData } from "@/interface";
import ScoreInfo from '@/components/scoreinfo';
import ChildMenu from "./ChildMenu";

type ClubInfoProps = {
    clubdata?: clubInfoData
}

/** this is for show second menu which is in left hand side */
const ClubInfoDetails: FC<ClubInfoProps> = ({ clubdata }) => {
    return (
        <>
            <div className="border-r border-[#587481] p-1 w-64 transition-all duration-300 2xl:w-72 hidden md:flex md:flex-col">
                <div className="flex h-full min-h-0 w-full flex-col">
                    <div className="relative flex h-full w-full flex-1 flex-col">
                        <div className="w-full h-auto px-2">
                            <div className='flex flex-col space-y-4 pt-12'>
                                <div className="w-full h-[48px] flex center">
                                    <img
                                        src={clubdata?.icon}
                                        alt="Image 1"
                                        className="w-[48px] h-[48px] rounded-full"
                                    />
                                    <span className='flex ml-2 items-center justify-center text-white text-[22px]'>{clubdata?.club_name}</span>
                                </div>
                                <div className="h-[128px] nutralme rounded-md p-3 flex flex-col space-y-2">
                                    <div className='h-[32px] w-full flex item-center'>
                                        <img
                                            src="/images/Avatar.png"
                                            alt="Image 1"
                                            className="w-[32px] h-[32px] rounded-full"
                                        />
                                        <span className='flex ml-2 items-center justify-center text-[16px]'>Pseudo</span>
                                    </div>
                                    <div className="flex relative">
                                        <div className="flex border-2 border-[#2CE5A7]  bg-[#2CE5A7] text-black w-[30px] h-[30px] justify-center rounded-[4px]">7</div>

                                        <div className="text-white text-size-[8px] w-[200px] h-[26px] mt-[2px] border-solid border-t-2 border-b-2 border-r-2 border-[#2CE5A7] bg-[#2CE5A7] bg-opacity-25 rounded-br-[4px] rounded-tr-[4px]">
                                            <div className="w-[17px] bg-[#2CE5A7]">
                                                268/1000
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex space-x-2">
                                        {(clubdata?.score)?.map((s_data) => (
                                            <ScoreInfo scoredata={s_data} />
                                        ))}
                                        {/* this is code is commented because 3rd image with name group is not showing properly with common code, show i have also created a 
                                        static code to make design as per figma */}

                                        {/* <div className="flex w-auto">
                                            <div className="flex w-[30px] h-[30px] justify-center absolute">
                                                <img src="/images/Gold_coin.png" className="w-full h-full" />
                                                <img src="/images/Frame1000005141.png" className="absolute top-0 right-0 w-[15px] h-[15px] -mt-[5px]"></img>
                                            </div>

                                            <div className="flex justify-center font-bold items-center text-white text-[12px] p-1 w-auto h-[26px] mt-[1px] pl-[10px] ml-[20px] border-solid border-t-2 border-b-2 border-r-2 border-[#587481] rounded-br-[4px] rounded-tr-[4px]">
                                                12,897
                                            </div>
                                        </div>
                                        <div className="flex w-auto">
                                            <div className="flex w-[30px] h-[30px] justify-center absolute">
                                                <img src="/images/emojione_gem-stone.png" className="w-full h-full" />
                                                <img src="/images/Frame1000005141.png" className="absolute top-0 right-0 w-[15px] h-[15px] -mt-[5px]"></img>
                                            </div>

                                            <div className="flex justify-center font-bold items-center text-white text-[12px] p-1 w-auto h-[26px] mt-[1px] pl-[10px] ml-[20px] border-solid border-t-2 border-b-2 border-r-2 border-[#587481] rounded-br-[4px] rounded-tr-[4px]">
                                                322
                                            </div>
                                        </div>
                                        <div className="flex w-auto">
                                            <div className="flex w-[26px] -mt-[5px] h-[32px] justify-center absolute">
                                                <img src="/images/Group.png" className="w-full h-full" />
                                                <img src="/images/Frame1000005141.png" className="absolute top-0 right-0 w-[15px] h-[15px]"></img>
                                            </div>
                                            <div className="flex justify-center font-bold items-center text-white text-[12px] p-1 w-auto h-[26px] mt-[1px] pl-[10px] ml-[20px] border-solid border-t-2 border-b-2 border-r-2 border-[#587481] rounded-br-[4px] rounded-tr-[4px]">
                                                2/5
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/** this is for menu below the score */}
                        <ChildMenu />
                    </div>
                </div>
            </div>
        </>
    );
}

export default ClubInfoDetails;