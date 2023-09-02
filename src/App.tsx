import useDdragon from "./utils/useDdragon";

function App() {
    const { fetchChamps } = useDdragon();
    fetchChamps();
    return (
        <div>
            <p>hello</p>
        </div>
    );
}

export default App;
