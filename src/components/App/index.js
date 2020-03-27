import { connect } from 'react-redux';
import App from './App';

const mapStateToProps = (state) => {
    return {
        verified: state.verified,
    }
}

export default connect(mapStateToProps)(App); 