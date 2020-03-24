import { connect } from 'react-redux';
import Drink from './Drink';
import { getData } from '../../actions';

const mapStateToProps = (state) => {
    return {
        drink: Object.values(state.drinks)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getData: () => dispatch(getData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Drink);