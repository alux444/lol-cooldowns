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
    const [haste, setHaste] = useState<number>(0);
    const [cdr, setCdr] = useState<number>(0);

    const { fetchChampionInfo } = useDdragon();

    useEffect(() => {
        const fetchInfo = async () => {
            const res = await fetchChampionInfo(champ.id);
            setSpells(res[champ.id].spells);
            console.log(res[champ.id]);
        };
        fetchInfo();
    }, []);

    useEffect(() => {
        const newCdr: number = 1 - 1 / (1 + haste / 100);
        setCdr(newCdr);
    }, [haste]);

    const abilities = spells.map((spell: any) => (
        <SpellDisplay key={spell.id} spell={spell} cdr={cdr} />
    ));

    const handleChangeHaste = (e: any) => {
        setHaste(e.target.value);
    };

    return (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50 z-10 w-screen h-screen">
            <div className="bg-slate-300 flex flex-col p-3 gap-2 rounded-lg shadow-md flex items-center z-2 overflow-auto w-fit h-fit">
                <div className="flex flex-col text-center text-wrap justify-center w-full">
                    <button onClick={closeInfo}>&times;</button>
                    <div className="block items-center p-1">
                        {champ.name}
                        <img
                            className="mx-auto"
                            src={`https://ddragon.leagueoflegends.com/cdn/13.17.1/img/champion/${champ.id}.png`}
                        />
                    </div>
                    <div className="flex gap-1 items-center justify-center">
                        <p>Ability Haste:</p>
                        <input
                            className="w-[50px]"
                            type="number"
                            value={haste}
                            onChange={handleChangeHaste}
                        />
                    </div>
                    <p>CDR: {(cdr * 100).toFixed(0)}%</p>
                    <div className="flex flex-wrap gap-1 w-full items-center justify-center">
                        {abilities}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChampInfo;
