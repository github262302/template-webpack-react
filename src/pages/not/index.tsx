import { Link } from "react-router-dom";

const App = function () {
    return (
        <div
            style={{
                display: "grid",
                placeItems: "center",
                fontSize: "100px",
            }}>
            404
            <Link to={"/"}>go home</Link>
        </div>
    );
};

export default App;
