import { createContext, useEffect, useState } from "react";
import useDdragon from "./utils/useDdragon";
import { Champion } from "./utils/Champion";
import SelectChamp from "./components/SelectChamp";

export const ChampContext = createContext<{
    champions: Champion[];
    setChampions: React.Dispatch<React.SetStateAction<Champion[]>>;
}>({
    champions: [],
    setChampions: () => {},
});

function App() {
    const [champs, setChamps] = useState<Champion[]>([]);
    const [champions, setChampions] = useState<Champion[]>([]);

    const { fetchChamps } = useDdragon();

    const setAllChamps = async () => {
        const champs = await fetchChamps();
        const array: Champion[] = Object.values(champs);
        setChamps(array);
    };

    useEffect(() => {
        setAllChamps();
    }, []);

    return (
        <ChampContext.Provider value={{ champions, setChampions }}>
            <div className="w-screen flex text-center flex-col items-center">
                <SelectChamp champs={champs} />
            </div>
        </ChampContext.Provider>
    );
}

export default App;
