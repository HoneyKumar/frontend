import axios from 'axios';
const clientName = 'client';

export default axios.create({
    baseURL : 'https://dev-three.usoft.co.uk/'+clientName+'/api',
});