import { Champion } from "../utils/Champion";

const SelectChamp = ({ champs }: { champs: Champion[] }) => {
    const options = champs.map((champ) => (
        <div>
            <p>{champ.name}</p>
        </div>
    ));
    return (
        <div>
            SelectChamp
            {options}
        </div>
    );
};

export default SelectChamp;
