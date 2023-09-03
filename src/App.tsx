import useDdragon from "./utils/useDdragon";

function App() {
    const { fetchChamps, fetchChampionInfo } = useDdragon();
    fetchChamps();
    fetchChampionInfo("Aatrox");
    return (
        <div>
            <p>hello</p>
        </div>
    );
}

export default App;
