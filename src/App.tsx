import { useEffect, useState } from "react";
import useDdragon from "./utils/useDdragon";
import { Champion } from "./utils/Champion";
import SelectChamp from "./components/SelectChamp";

function App() {
    const [champs, setChamps] = useState<Champion[]>([]);

    const { fetchChamps, fetchChampionInfo } = useDdragon();

    const setAllChamps = async () => {
        const champs = await fetchChamps();
        const array: Champion[] = Object.values(champs);
        setChamps(array);
    };

    useEffect(() => {
        setAllChamps();
    }, []);

    function test() {
        console.log(champs);
    }

    return (
        <div className="w-screen h-screen items-center">
            <button onClick={test}>Test</button>
            <SelectChamp champs={champs} />
        </div>
    );
}

export default App;
