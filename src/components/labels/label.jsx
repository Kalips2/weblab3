// LabelsList.jsx
import React, {useState} from 'react';
import AppHeader from "../shared/header/header";
import Footer from "../shared/footer/footer";
import LabelService from "../../services/LabelService";

const Label = ({labels, setLabels}) => {
    const [labelId, setLabelId] = useState('');
    const [labelInfo, setLabelInfo] = useState(null);

    const handleSearch = () => {
        LabelService.getById(labelId).then(result => {
            const label = {
                id: result.data.id,
                name: result.data.name,
                lat: result.data.coordinates.lat,
                lon: result.data.coordinates.lon,
            };
            setLabelInfo(label);
        }).catch((error) => {
            alert('Помилка! ' + error.message);
            setLabelInfo(null)
        });
    };

    const handleInputChange = (field, value) => {
        setLabelInfo((prevLabelInfo) => ({
            ...prevLabelInfo,
            [field]: value,
        }));
    };

    const handleUpdate = () => {
        LabelService.updateById(labelId, labelInfo.name, labelInfo.lat, labelInfo.lon).then(result => {
            // Знайдемо індекс лейбла, який має бути оновлений
            const labelIndex = labels.findIndex(label => label.id === labelId);

            // Створимо копію масиву labels
            const updatedLabels = [...labels];

            // Оновимо значення лейбла за його індексом
            updatedLabels[labelIndex] = {
                ...updatedLabels[labelIndex],
                name: labelInfo.name,
                coordinates: {
                    lat: labelInfo.lat,
                    lon: labelInfo.lon
                }
                // Оновіть інші поля за потребою
            };

            // Встановимо оновлений масив labels в стан
            setLabels(updatedLabels);
        }).catch((error) => {
            alert('Помилка оновлення ' + error.message);
        });
    };

    return (
        <div>
            <AppHeader text={"Список лейблів"}/>
            <div className="m-3">
                <h2>Знайти лейбл</h2>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Введіть ID лейбла"
                        value={labelId}
                        onChange={(e) => setLabelId(e.target.value)}
                    />
                </div>
                <button className="btn btn-primary mb-3" onClick={handleSearch}>
                    Знайти
                </button>

                {labelInfo && (
                    <div>
                        <h3>Інформація про лейбл:</h3>
                        <div className="mb-3">
                            <label>ID:</label>
                            <input
                                type="text"
                                className="form-control"
                                value={labelInfo.id}
                                readOnly
                            />
                        </div>
                        <div className="mb-3">
                            <label>Назва:</label>
                            <input
                                type="text"
                                className="form-control"
                                value={labelInfo.name}
                                onChange={(e) => handleInputChange('name', e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label>Широта:</label>
                            <input
                                type="text"
                                className="form-control"
                                value={labelInfo.lat}
                                onChange={(e) => handleInputChange('lat', e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label>Довгота:</label>
                            <input
                                type="text"
                                className="form-control"
                                value={labelInfo.lon}
                                onChange={(e) => handleInputChange('lon', e.target.value)}
                            />
                        </div>
                        <button className="btn btn-primary mb-3" onClick={handleUpdate}>
                            Оновити
                        </button>
                    </div>
                )}
            </div>
            <Footer/>
        </div>
    );
};

export default Label;
