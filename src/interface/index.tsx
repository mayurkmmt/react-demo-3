export interface MenuItem {
    id: string,
    icon: string,
    club_name: string
    link: string
}

export interface scoreInfoData {
    score: string,
    image: string
}

export interface clubInfoData {
    id: string,
    club_name: string
    icon: string
    score: scoreInfoData[]
}