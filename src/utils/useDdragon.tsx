import axios from "axios";

const useDdragon = () => {
    const fetchChamps = async () => {
        let version: string = "13.17.1";

        try {
            const response = await axios.get(
                `https://ddragon.leagueoflegends.com/api/versions.json`
            );
            const data = response.data[0];
            version = data;
            console.log(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }

        try {
            const response = await axios.get(
                `http://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/champion.json`
            );
            const data = response.data.data;

            console.log(data.data);
            return data;
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const fetchChampionInfo = async (champion: string) => {
        try {
            const response = await axios.get(
                `http://ddragon.leagueoflegends.com/cdn/13.17.1/data/en_US/champion/${champion}.json`
            );
            const data = response.data;
            console.log(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    return { fetchChamps, fetchChampionInfo };
};

export default useDdragon;
