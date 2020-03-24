import { connect } from 'react-redux';
import SpiritCard from './SpiritCard';

const mapStateToProps = (state) => {
    return {
        id: state.id,
        name: state.name
    }
}

export default connect(mapStateToProps)(SpiritCard);