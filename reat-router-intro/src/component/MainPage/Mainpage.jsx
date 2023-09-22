

import { useLoaderData } from 'react-router-dom';
import User from './user';

const Mainpage = () => {
    const users = useLoaderData();

    return (
        <div>
            <h1>This is main  page {users.length}</h1>
            {
                users.map((u) => <User key={u.id} User={u}  ></User>)
            }
        </div>
    );
};



export default Mainpage;