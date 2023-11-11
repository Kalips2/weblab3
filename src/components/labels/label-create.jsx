import React, {useState} from 'react';
import LabelService from "../../services/LabelService";
import AppHeader from "../shared/header/header";
import { useNavigate  } from 'react-router-dom'
import Footer from "../shared/footer/footer";

const LabelCreate = ({labels, setLabels}) => {
    const [name, setName] = useState('');
    const [lat, setLat] = useState('');
    const [lon, setLon] = useState('');
    const navigate = useNavigate ();

    const handleCreateLabel = () => {
        // Викликаємо сервіс для створення лейбла з введеними даними
        LabelService.create(name, lat, lon)
            .then(response => {
                const idNewLabel = response.data
                LabelService.getById(idNewLabel).then((result) => {
                    const label = {
                        id: result.data.id,
                        name: result.data.name,
                        coordinates: {
                            lat: result.data.coordinates.lat,
                            lon: result.data.coordinates.lon
                        }
                    };
                    let newlabels = [...labels, label]
                    setLabels(newlabels);
                })
                navigate('/labels');
            })
            .catch(error => {
                alert('Помилка при видаленні лейбла: ' + error.message);
            });
    };

    return (
        <div>
            <AppHeader text={"Створити лейбл"}/>
            <div className="m-5">
                <div className="mb-3">
                    <label>Назва:</label>
                    <input type="text"
                           value={name}
                           className="form-control"
                           onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label>Широта:</label>
                    <input type="text"
                           value={lat}
                           className="form-control"
                           onChange={(e) => setLat(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label>Довгота:</label>
                    <input type="text"
                           value={lon}
                           className="form-control"
                           onChange={(e) => setLon(e.target.value)}/>
                </div>
                <button className="btn btn-primary mb-3" onClick={handleCreateLabel}>Створити лейбл</button>
            </div>
            <Footer/>
        </div>
    );
};

export default LabelCreate;
