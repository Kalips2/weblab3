import axios from "axios";

const BASE_URL = 'http://localhost:8080/rest/labels';

export default class LabelService {

    static async getAllLabels() {
        return await axios.get(BASE_URL);
    }
    static async deleteLabel(id) {
        return await axios.delete(BASE_URL + "/open/delete/" + id);
    }
    static async getById(id) {
        return await axios.get(BASE_URL + "/open/" + id);
    }
    static async updateById(id, name, lat, lon) {
        return await axios.put(BASE_URL + "/open/update", null,{
            params: {
                id: id,
                name: name,
                coordinates: lat + ', ' + lon,
            }
        });
    }

    static async create(name, lat, lon) {
        return await axios.put(BASE_URL + "/open/create", null,{
            params: {
                name: name,
                coordinates: lat + ', ' + lon,
            }
        });
    }
}