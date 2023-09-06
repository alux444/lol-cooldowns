import { useEffect, useState } from "react";
import { Champion } from "../utils/Champion";
import useDdragon from "../utils/useDdragon";
import SpellDisplay from "./SpellDisplay";

const ChampInfo = ({
    champ,
    closeInfo,
}: {
    champ: Champion;
    closeInfo: () => void;
}) => {
    const [spells, setSpells] = useState([]);

    const { fetchChampionInfo } = useDdragon();

    useEffect(() => {
        const fetchInfo = async () => {
            const res = await fetchChampionInfo(champ.id);
            setSpells(res[champ.id].spells);
            console.log(res[champ.id].spells);
        };
        fetchInfo();
    }, []);

    const abilities = spells.map((spell: any) => (
        <SpellDisplay key={spell.id} spell={spell} />
    ));

    return (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50 z-10 w-screen h-screen">
            <div className="bg-slate-300 flex flex-col p-3 gap-2 rounded-lg shadow-md flex items-center z-2 overflow-auto w-[90vw] h-[90vh]">
                <div className="flex flex-col text-center text-wrap justify-center w-full">
                    <button onClick={closeInfo}>&times;</button>
                    {champ.name}
                    <button onClick={() => console.log(spells)}>aa</button>
                    {abilities}
                </div>
            </div>
        </div>
    );
};

export default ChampInfo;
