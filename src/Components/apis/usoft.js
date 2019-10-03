import axios from 'axios';
const clientName = 'client';

export default axios.create({
    baseURL : 'https://dev-six.usoft.co.uk/'+clientName+'/api',
});