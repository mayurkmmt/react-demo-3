
/** this is a top header, i have crated it as a component */
const TopHeader = () => {

    return (
        <>
            <nav className="flex items-center justify-between flex-wrap p-6 ml-20 mr-20">
                <div className="left-24 w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="text-sm lg:flex-grow">
                        <a href='#'><img src='/images/kboom_logo.png' /></a>
                    </div>
                    <div className='flex space-x-4'>
                        <a className="flex-grow"><img src='/images/Twitter.png' /> </a>
                        <a className="flex-grow"><img src='/images/Twitch.png' /> </a>
                        <a className="flex-grow"><img src='/images/TikTok.png' /> </a>
                        <a className="flex-grow"><img src='/images/YouTube.png' /> </a>
                        <a className="flex-grow"><img src='/images/Instagram.png' /> </a>
                        <a className="flex-grow"><img src='/images/Facebook.png' /> </a>
                        <a className="flex-grow"><img src='/images/Discord.png' /> </a>
                    </div>
                </div>
            </nav>
            <hr className='flex relative w-screen border-2 nutralme' />
        </>
    )

}

export default TopHeader;