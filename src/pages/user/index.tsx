import { useParams } from "react-router-dom";

const App = function (props: ReactProps) {
    const { state, dispatch } = props;
    function add() {
        dispatch({
            type: "init/add",
        });
    }
    const { id } = useParams();
    return (
        <div>
            id: {id}
            <div>state:{state.init}</div>
            <button onClick={add}> add</button>
        </div>
    );
};

export default App;
