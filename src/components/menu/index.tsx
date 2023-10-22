
import { MenuItem } from '@/interface'
import { routes } from '@/router/routes';
import { useRouter } from "next/router";

interface MenuCardProps {
    info: MenuItem,
    is_active: boolean
}

const MenuCard: React.FC<MenuCardProps> = ({ info, is_active }) => {
    const router = useRouter();

    /** click event of menu, to show data of other club information */
    const onMenuClick = (id: string) => {
        router.push(`/${routes.HOME}/${id}`)
    };

    return (
        <>
            <div className="flex items-center justify-center">
                {is_active && <div className="absolute w-[8px] h-[20px] left-0 bg-[#587481] rounded-l-lg transform rotate-180"></div>}
                <button onClick={() => onMenuClick(info.id)}>
                    <div className={`w-[70px] h-[70px] rounded-full border-2 flex items-center justify-center p-2 ${is_active ? "menu-active" : ""} `}>
                        <img
                            src={info.icon}
                            alt="Image 1"
                            className="w-full h-full rounded-full"
                            width="64"
                            height="64"
                        /></div>
                </button>
            </div>
        </>
    )
}

export default MenuCard;