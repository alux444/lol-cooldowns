import { useContext, useState } from "react";
import { Champion } from "../utils/Champion";
import ChampDisplay from "./ChampDisplay";
import { ChampContext } from "../App";
import InfoPage from "./InfoPage";

const SelectChamp = ({ champs }: { champs: Champion[] }) => {
    const [showPage, setShowPage] = useState(false);
    const { champions, setChampions } = useContext(ChampContext);

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
                <div className="flex flex-col gap-1 p-3 items-center justify-center">
                    {champions.length > 0 && (
                        <div className="flex gap-1 flex-wrap">
                            <button
                                onClick={openSearch}
                                className="border-2 border-green-500 w-fit p-4"
                            >
                                Show all searched
                            </button>
                            <button
                                onClick={() => setChampions([])}
                                className="border-2 border-red-500 w-fit p-4"
                            >
                                Reset
                            </button>
                        </div>
                    )}
                    <div className="flex flex-wrap gap-2 items-center text-center justify-center">
                        {options}
                    </div>
                </div>
            )}
        </>
    );
};

export default SelectChamp;
