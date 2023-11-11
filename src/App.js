import Home from "./components/Home";
import {Route, Routes} from "react-router-dom";
import Labels from "./components/labels/labels";
import Label from "./components/labels/label";
import LabelCreate from "./components/labels/label-create";
import {useEffect, useState} from "react";
import LabelService from "./services/LabelService";

const App = () => {
    const [labels, setLabels] = useState([]);

    useEffect(() => {
        LabelService.getAllLabels().then(response => setLabels(response.data));
    }, [])


    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/labels" element={<Labels  labels={labels} setLabels={setLabels} />}/>
            <Route path="/labels/find" element={<Label labels={labels} setLabels={setLabels} />}/>
            <Route path="/labels/create" element={<LabelCreate labels={labels} setLabels={setLabels} />}/>
        </Routes>
    );
};

export default App;
