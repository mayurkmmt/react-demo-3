import { FC, ReactNode, useEffect } from "react"
import TopHeader from '@/components/header'
import MenuCard from '@/components/menu'
import { MenuItem } from "@/interface"
import React from "react";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import { routes } from '@/router/routes';

type LayoutProps = {
    children?: ReactNode
}

/** this is a dynamic menu list, I can fetch it using API call and use that as well */
const menuItems: MenuItem[] = [
    { id: "1", club_name: "Home", icon: "/images/menu_1.png", link: "/1" },
    { id: "2", club_name: "Manage Posts", icon: "/images/menu_2.png", link: "/2" },
    { id: "3", club_name: "Manage Users", icon: "/images/menu_3.png", link: "/3" },
    { id: "4", club_name: "Manage Tutorials", icon: "/images/menu_4.png", link: "/4" },
];

const Layout: FC<LayoutProps> = ({
    children
}) => {
    const params = useParams();
    const router = useRouter();

    /** here it by default select the first option from menu */
    useEffect(() => {
        router.push(`/${routes.HOME}/${menuItems[0].id}`)
    }, []);

    return (
        <>
            <TopHeader />
            {/* this is a left hand side first menu which is generate dynamically */}
            <div className='flex h-[calc(100vh-90px)] w-screen'>
                <div className="w-24 relative border-r border-[#587481]">
                    <div className="flex flex-col space-y-4 pt-10">
                        {menuItems.map((menu) => (
                            <MenuCard info={menu} is_active={params?.id === menu.id} />
                        ))}
                    </div>
                </div>
                {children}
                <div className='flex h-full w-2/3 max-w-full flex-1 flex-col'></div>
            </div>
        </>
    )
}

export default Layout;