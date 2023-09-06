const InfoPage = ({ closeInfo }: { closeInfo: () => void }) => {
    return (
        <div>
            <button onClick={closeInfo}>Back</button>InfoPage
        </div>
    );
};

export default InfoPage;
