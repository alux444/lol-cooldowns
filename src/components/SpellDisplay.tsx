import React, { useState } from "react";

const SpellDisplay = ({ spell }: { spell: any }) => {
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
            <button onClick={increaseLevel}>Level up</button>
            <button onClick={decreaseLevel}>Level down</button>
        </div>
    );
};

export default SpellDisplay;
