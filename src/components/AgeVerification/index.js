import { connect } from 'react-redux';
import AgeVerification from './AgeVerification';
import { verified } from '../../data/actions'

const mapDispatchToProps = dispatch => {
    return {
        verified : () => dispatch(verified()),
    }
}

export default connect(null, mapDispatchToProps)(AgeVerification); 