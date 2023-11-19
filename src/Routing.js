import { Route, Routes, Navigate } from "react-router-dom";
import DogDetailsFilter from './DogDetailsFilter.js';
import DogList from "./DogList.js";

const Routing = ({ dogs }) => {
    return (
        <Routes>
            <Route exact path="/dogs" element={<DogList dogs={dogs} />} />
            <Route exact path="/dogs/:name" element={<DogDetailsFilter dogs={dogs} />} />
            <Route path="*" element={<Navigate to="/dogs" />} />
        </Routes>
    );
}

export default Routing;