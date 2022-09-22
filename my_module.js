import axios from 'axios';

const getData = (user_id) => 
{
    return new Promise(async(resolve, reject) => {

        const { data } = await axios("https://jsonplaceholder.typicode.com/users/" + user_id);

	    
        resolve(data);
        
        

    });
    
}


export const posts = (user_id) => 
{
    return new Promise(async(resolve, reject) => {

        const { data } = await axios("https://jsonplaceholder.typicode.com/posts?userId=" + user_id);

	    
        resolve(data);
        
        

    });
    
}

export default getData;