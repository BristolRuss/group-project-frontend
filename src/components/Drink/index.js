import { connect } from 'react-redux';
import Drink from './Drink';
// import { getData } from '../Data/actions';

const mapStateToProps = (state, props) => {
    return {
        drink: state.drinks[props.id]
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // getData: () => dispatch(getData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Drink);