import { useContext, useEffect, useState } from "react";
import { Champion } from "../utils/Champion";
import ChampInfo from "./ChampInfo";
import { ChampContext } from "../App";

const ChampDisplay = ({ champ }: { champ: Champion }) => {
    const [display, setDisplay] = useState<boolean>(false);
    const [selected, setSelected] = useState<boolean>(false);

    const { champions, setChampions } = useContext(ChampContext);

    useEffect(() => {
        const checkSelected = () => {
            const isSelected = champions.some(
                (champion) => champion.id === champ.id
            );
            setSelected(isSelected);
        };
        checkSelected();
    }, [champions]);

    const addChamp = () => {
        const newChamps = [...champions, champ];
        console.log(newChamps);
        setChampions(newChamps);
    };

    const removeChamp = () => {
        const newChamps = champions.filter(
            (champion) => champion.id !== champ.id
        );
        setChampions(newChamps);
    };

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
                    src={`https://ddragon.leagueoflegends.com/cdn/13.17.1/img/champion/${champ.id}.png`}
                />
            </button>
            <div className="flex gap-1 items-center justify-center">
                <p>{champ.name}</p>
                {!selected ? (
                    <button
                        onClick={addChamp}
                        className="border-2 border-green-500 w-[2rem]"
                    >
                        +
                    </button>
                ) : (
                    <button
                        onClick={removeChamp}
                        className="border-2 border-red-400 w-[2rem]"
                    >
                        -
                    </button>
                )}
            </div>
            {display && <ChampInfo champ={champ} closeInfo={closeModal} />}
        </div>
    );
};

export default ChampDisplay;
