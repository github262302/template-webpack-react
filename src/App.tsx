/**
 * @prettier
 */

import { HashRouter, Routes, Route } from "react-router-dom";
import { connect } from "dva";
import Admin from "@/pages/admin";
import Index from "@/pages/index";
import User from "@/pages/user";
import Not from "@/pages/not";
/**HashRouter*/
const App = (props: any) => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Index {...props} />} />
                <Route path="/user/:id" element={<User {...props} />} />
                <Route path="/admin/" element={<Admin {...props} />} />
                <Route path="*" element={<Not />} />
            </Routes>
        </HashRouter>
    );
};
export default connect(function (state: any) {
    return { state: state };
})(App);
