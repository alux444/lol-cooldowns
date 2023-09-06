import { useContext, useState } from "react";
import { Champion } from "../utils/Champion";
import ChampDisplay from "./ChampDisplay";
import { ChampContext } from "../App";
import InfoPage from "./InfoPage";

const SelectChamp = ({ champs }: { champs: Champion[] }) => {
    const [showPage, setShowPage] = useState(false);
    const { champions } = useContext(ChampContext);

    const options = champs.map((champ) => (
        <ChampDisplay champ={champ} key={champ.key} />
    ));

    const openSearch = () => {
        setShowPage(true);
    };

    const closeSearch = () => {
        setShowPage(false);
    };

    return (
        <>
            {showPage ? (
                <InfoPage closeInfo={closeSearch} />
            ) : (
                <div className="flex flex-col gap-1 p-3 items-center">
                    {champions.length > 0 && (
                        <button
                            onClick={openSearch}
                            className="border-2 border-green-500 w-fit p-4"
                        >
                            Show all searched
                        </button>
                    )}
                    <div className="flex flex-wrap gap-2 items-center text-center">
                        {options}
                    </div>
                </div>
            )}
        </>
    );
};

export default SelectChamp;
