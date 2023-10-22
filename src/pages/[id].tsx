import ClubInfoDetails from "@/components/menu/ClubInformation";
import Layout from "@/layout";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { clubInfoData } from "@/interface";

const ClubInfo = () => {

    const [clubInfo, setClubInfo] = useState<clubInfoData>();
    const params = useParams();

    /** fetch data from API based on the ID pass into the params by menu click */
    useEffect(() => {
        if (params?.id) {
            const jsonFileUrl = `jsondata/${params.id}.json`;

            fetch(jsonFileUrl)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then((data) => {
                    setClubInfo(data);
                })
                .catch((error) => {
                    console.error('Error fetching JSON:', error);
                });
        }
    }, [params?.id]);

    return (
        <>
            <Layout>
                <ClubInfoDetails clubdata={clubInfo} />
            </Layout>
        </>
    )
}

export default ClubInfo;