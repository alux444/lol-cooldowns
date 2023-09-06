import { Champion } from "../utils/Champion";
import ChampDisplay from "./ChampDisplay";

const SelectChamp = ({ champs }: { champs: Champion[] }) => {
    const options = champs.map((champ) => <ChampDisplay champ={champ} />);
    return (
        <div className="flex flex-col gap-1 p-3">
            SelectChamp
            <div className="flex flex-wrap gap-2 items-center text-center">
                {options}
            </div>
        </div>
    );
};

export default SelectChamp;
