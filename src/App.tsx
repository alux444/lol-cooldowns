import { useEffect, useState } from "react";
import useDdragon from "./utils/useDdragon";
import { Champion } from "./utils/Champion";
import SelectChamp from "./components/SelectChamp";

function App() {
    const [champs, setChamps] = useState<Champion[]>([]);

    const { fetchChamps } = useDdragon();

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
        <div className="w-screen flex text-center flex-col items-center">
            <button onClick={test}>Test</button>
            <SelectChamp champs={champs} />
        </div>
    );
}

export default App;
