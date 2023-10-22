
import { FC } from "react";
type MenuButtonProps = {
    image?: string,
    name?: string,
    is_active?: boolean
}

const MenuButton: FC<MenuButtonProps> = ({ image, name, is_active }) => {
    return (
        <>
            <button className={` ${is_active ? "bg-[#84F7D8] text-[#262C3A] rounded-full h-[40px]" : ""}`}>
                <a className='font-semibold flex w-full items-center gap-x-2 whitespace-nowrap p-2 text-left text-[14px]'>
                    <img className='' src={image} />
                    <span className='flex-1 false'>{name}</span>
                </a>
            </button >
        </>
    )
}

export default MenuButton;