
import PropTypes from 'prop-types';
import { FacebookProvider, Like } from 'react-facebook';

const Likebutton = (props) => {
    return (
        <div>
            <FacebookProvider appId="123456789">
                <Like href="http://www.facebook.com" colorScheme="dark" showFaces share />
            </FacebookProvider>
        </div>
    );
};

Likebutton.propTypes = {

};

export default Likebutton;