import { connect } from 'react-redux';
import SpiritCard from './SpiritCard';

const mapStateToProps = (state) => {
    return {
        spirits: Object.values(state.spirits)
    }
}

const mapDispatchToProps = dispatch => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SpiritCard); 