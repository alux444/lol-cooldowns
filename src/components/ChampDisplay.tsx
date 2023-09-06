import { useState } from "react";
import { Champion } from "../utils/Champion";
import ChampInfo from "./ChampInfo";

const ChampDisplay = ({ champ }: { champ: Champion }) => {
    const [display, setDisplay] = useState<boolean>(false);

    const closeModal = () => {
        setDisplay(false);
    };

    const openModal = () => {
        setDisplay(true);
    };

    return (
        <div className="flex flex-col gap-1">
            <button onClick={openModal}>
                <img
                    src={`http://ddragon.leagueoflegends.com/cdn/13.17.1/img/champion/${champ.id}.png`}
                />
            </button>
            {champ.name}
            {display && <ChampInfo champ={champ} closeInfo={closeModal} />}
        </div>
    );
};

export default ChampDisplay;
