import { Champion } from "../utils/Champion";

const ChampDisplay = ({ champ }: { champ: Champion }) => {
    return (
        <div className="flex flex-col gap-1">
            <img
                src={`http://ddragon.leagueoflegends.com/cdn/13.17.1/img/champion/${champ.id}.png`}
            />
            {champ.name}
        </div>
    );
};

export default ChampDisplay;
