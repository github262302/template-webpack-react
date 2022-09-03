/**
 * @prettier
 */
import React from "react";
import Avatar from "@/components/Avatar";
import Card from "@/components/Card";
import { HashRouter, Routes, Route } from "react-router-dom";
import Admin from "@/pages/admin";
import Index from "@/pages/index";
import User from "@/pages/user";

/**牛逼*/
export default ({}) => {
    const a = "";
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/user" element={<User />} />
                <Route path="/admin" element={<Admin />} />
            </Routes>
        </HashRouter>
    );
};
