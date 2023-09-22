import { useLoaderData } from 'react-router-dom';

const UserDetails = () => {
    const UsersDetails = useLoaderData();
    console.log(UsersDetails);
    return (
        <div>
            <h1>user detais {UsersDetails.name}</h1>
        </div>
    );
};

UserDetails.propTypes = {

};

export default UserDetails;