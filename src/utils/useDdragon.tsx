import axios from "axios";

const useDdragon = () => {
    const fetchChamps = async (version: string = "13.17.1") => {
        console.log(version);

        try {
            const response = await axios.get(
                `http://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/champion.json`
            );
            const data = response.data;

            console.log(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    return { fetchChamps };
};

export default useDdragon;
