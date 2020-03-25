import { connect } from 'react-redux';
import SpiritCard from './SpiritCard';
import { getData } from '../../actions';

const mapStateToProps = (state) => {
    return {
        spirits: Object.values(state.spirits)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getData: () => dispatch(getData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SpiritCard); 