
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const User = ({ User }) => {
    const { name, email, website, phone, address, company, id } = User;
    return (
        <div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full">
                        <tbody>
                            <tr className=' grid grid-cols-1 lg:grid-cols-7 md:grid-cols-4 grid-flow-row-dense'>
                                <th className=''>{id}</th>
                                <td>{name} </td>
                                <td>{email}</td>
                                <td>{phone}</td>
                                <td>{website}</td>
                                <td>{address.city}</td>
                                <td><Link to={`/users/${id}`} className=' btn'>see more</Link></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    );
};

User.propTypes = {

};

export default User;