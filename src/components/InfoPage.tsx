import { useContext } from "react";
import { ChampContext } from "../App";
import ChampInfoPg from "./ChampInfoPg";

const InfoPage = ({ closeInfo }: { closeInfo: () => void }) => {
    const { champions } = useContext(ChampContext);

    const results = champions.map((champ) => <ChampInfoPg champ={champ} />);

    return (
        <div className="flex flex-col gap-1 items-center">
            <button
                onClick={closeInfo}
                className="border-2 border-red-500 p-3 w-fit"
            >
                Back
            </button>
            <div className="flex flex-wrap justify-center items-center gap-1">
                {results}
            </div>
        </div>
    );
};

export default InfoPage;
