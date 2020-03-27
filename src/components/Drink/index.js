import { connect } from 'react-redux';
import Drink from './Drink';
import { getDrink } from '../../data/actions';

const mapStateToProps = (state, props) => {
    return {
        drink: state.drinks[+props.id]
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        getData: () => dispatch(getDrink(props.id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Drink);