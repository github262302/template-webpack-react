import { useRef } from "react";
import { Link } from "react-router-dom";

const App = function () {
    return (
        <div>
            <Link to={"/user/123"}>user/123</Link>
            <br />
            <Link to={"/admin"}>admin</Link>
        </div>
    );
};

export default App;
