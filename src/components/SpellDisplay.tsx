import { useState } from "react";

const SpellDisplay = ({ spell, cdr }: { spell: any; cdr: number }) => {
    const [selected, setSelected] = useState(0);
    const cooldowns = [];
    for (let i = 0; i < spell.maxrank; i++) {
        cooldowns.push(
            <button
                onClick={() => setSelected(i)}
                className={`flex gap-1 ${
                    selected === i && "text-xl font-bold"
                }`}
            >
                <p>{i + 1} - </p>
                <p key={i}>{(spell.cooldown[i] * (1 - cdr)).toFixed(2)}s</p>
            </button>
        );
    }

    return (
        <div className="flex items-center p-1 flex-col">
            <img
                className="h-[60px] w-[60px]"
                src={`https://ddragon.leagueoflegends.com/cdn/13.17.1/img/spell/${spell.image.full}`}
            />
            {cooldowns}
        </div>
    );
};

export default SpellDisplay;
