import { Link } from "react-router-dom";
const App = function () {
    return (
        <div>
            <Link to={"/user"}>user</Link>
            <br />
            <Link to={"/admin"}>admin</Link>
        </div>
    );
};

export default App;
