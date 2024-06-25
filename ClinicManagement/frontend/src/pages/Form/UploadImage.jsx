import axios from "axios";

const UploadImage = async (images, additionalData) => {
    const formData = new FormData();

    Object.keys(additionalData).forEach(key => {
        formData.append(key, additionalData[key]);
    });
    
    try{ 

        images.forEach((image,index) => {
            formData.append(`image${index + 1}`, image);
        });
        const response = await axios.post('http://localhost:5000/upload',formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    } catch (error) {
        console.log("Error uploading image: ", error);
        throw error;
    }
};
export {UploadImage};