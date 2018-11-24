import axios from 'axios';

let data = [];

(function(){
    axios.get('http://jsonplaceholder.typicode.com/users')
    .then(res => {
        data = res.data;
        console.log(data)
    })
})();

export default data;