
import api from '../config/axios';

export const getCategoryCars = async () => {
    try {
        var response = await api.get('category-cars');
        return response.data;
    } catch (error) {
        return error;
    }
    
}