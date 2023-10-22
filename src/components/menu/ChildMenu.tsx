import MenuButton from "../button";

/** this is a menu which we have below the score. We can also make it dynamic if needed */
const ChildMenu = () => {
    return (
        <>
            <nav className="flex h-full w-full flex-1 flex-col">
                <div className="mb-4 flex-1 flex-col content-center space-y-2 duration-300 mt-5 px-1 md:px-2">
                    <div className="flex flex-col gap-2">
                        <MenuButton image='/images/tabler-icon-license.svg' name="Quests" />
                        <MenuButton image='/images/tabler-icon-map.svg' name="Map" />
                        <MenuButton image='/images/tabler-icon-medal-2.svg' name="Medal" />
                        <MenuButton image='/images/tabler-icon-building-store.svg' name="Shop" is_active="true" />
                        <MenuButton image='/images/tabler-icon-license.svg' name="Quests" />
                        <MenuButton image='/images/tabler-icon-bell.svg' name="Notification" />
                    </div>
                </div>
                <div>
                    <div className="flex flex-shrink-0 flex-col">
                        <nav className=" flex flex-1 flex-col content-center space-y-1 duration-300 my-1 px-2 2xl:my-5">
                            <MenuButton image='/images/user_profile.png' name="Profile" />
                            <MenuButton image='/images/settings.png' name="Account Management" />
                        </nav>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default ChildMenu;