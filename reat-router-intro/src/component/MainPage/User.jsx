
import PropTypes from 'prop-types';

const User = ({ User }) => {
    console.log(User);
    const { name, email, website, phone, address, company, id } = User;
    return (
        <div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full">
                        <tbody>
                            {/* row 1 */}
                            <tr className=' grid grid-cols-1 lg:grid-cols-7 md:grid-cols-4 grid-flow-row-dense'>
                                <th className=''>{id}</th>
                                <td>{name} </td>
                                <td>{email}</td>
                                <td>{phone}</td>
                                <td>{website}</td>
                                <td>{address.city}</td>
                                <td><button className='btn'>See more</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

User.propTypes = {

};

export default User;