
import PropTypes from 'prop-types';

const NavItame = ({ name, path }) => {
    // console.log(name, path);
    return (
        <div >
            
            <a className=' text-xl font-semibold text-white bg-slate-400 p-2 flex m-2 md:m-0 rounded-lg ' href={path}>{name}</a>
        </div>
    );
};
NavItame.propTypes ={
    name: PropTypes.string,
    path: PropTypes.string
}
export default NavItame;