import axios from 'axios';
const clientName = 'client';

export default axios.create({
    baseURL : 'http://dev-three.usoft.co.uk/'+clientName+'/api',
});