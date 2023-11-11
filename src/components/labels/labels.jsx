// LabelsList.jsx
import React from 'react';
import AppHeader from "../shared/header/header";
import Footer from "../shared/footer/footer";
import LabelService from "../../services/LabelService";

const Labels = ({labels, setLabels}) => {

    const handleDelete = (id) => {
        LabelService.deleteLabel(id).then(() => {
            setLabels((labels) => labels.filter((label) => label.id !== id))
        }).catch((error) => {
            alert('Помилка при видаленні лейбла: ' + error.message);
        });
    }

    return (
        <div>
            <AppHeader text={"Список лейблів"}/>
            <div style={{ margin: '20px' }}>
            <table className="table table-striped table-bordered">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Назва</th>
                    <th>Координати</th>
                    <th>Видалити</th>
                </tr>
                </thead>
                <tbody>
                {labels.map((label) => (
                    <tr key={label.id}>
                        <td>{label.id}</td>
                        <td>{label.name}</td>
                        <td>{label.coordinates.lat}, {label.coordinates.lon}</td>
                        <td>
                            <button className="btn btn-danger" onClick={() => handleDelete(label.id)}>
                                Видалити
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default Labels;
