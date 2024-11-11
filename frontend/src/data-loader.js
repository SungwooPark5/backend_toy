import axios from 'axios';

const apiClient = axios.create({
    baseURL: process.env.BASE_URL || 'http://localhost:3000',
});


export async function getAllGalleryData() {
    // GET /gallery API 호출
    const response = await apiClient.get('/gallery');

    // Date parsing
    response.data = response.data.map((data) => {
        const date = data.upload_date.split('T')[0];
        data.upload_date = date;
        return data;
    });

    return response.data;
}

// async function test(){
//     const result = await getAllGalleryData();
//     console.log(result);
// }

// test();