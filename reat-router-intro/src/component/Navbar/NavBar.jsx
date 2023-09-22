

import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <div className=' p-4 text-2xl  flex flex-col md:flex-row justify-between bg-sky-500'>
                <h1>Logo</h1>
                <ul className='  gap-3 flex flex-col md:flex-row'>
                    <Link to='/joy'>Home</Link>
                    <Link to="/about">About</Link>
                    <Link to={`/blog`}>Blog</Link>
                    <Link to="/main" >Users </Link>
                </ul>
            </div>
        </div>
    );
};

NavBar.propTypes = {

};

export default NavBar;