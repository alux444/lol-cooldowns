import { useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const SpellDisplay = ({ spell, cdr }: { spell: any; cdr: number }) => {
    const [level, setLevel] = useState(1);

    const increaseLevel = () => {
        if (level + 1 <= spell.maxrank) {
            setLevel(level + 1);
        }
    };

    const decreaseLevel = () => {
        if (level - 1 > 0) {
            setLevel(level - 1);
        }
    };

    return (
        <div className="flex items-center p-1 flex-col">
            <img
                src={`https://ddragon.leagueoflegends.com/cdn/13.17.1/img/spell/${spell.image.full}`}
            />
            <p>Level: {level}</p>
            <div className="flex gap-1">
                <button onClick={increaseLevel}>
                    <KeyboardArrowUpIcon />
                </button>
                <button onClick={decreaseLevel}>
                    <KeyboardArrowDownIcon />
                </button>
            </div>
            <p>{(spell.cooldown[level - 1] * (1 - cdr)).toFixed(2)}s</p>
        </div>
    );
};

export default SpellDisplay;
