import { connect } from 'react-redux';
import DrinkCard from './DrinkCard';
import { getData } from '../../actions';

const mapStateToProps = (state) => {
    return {
        drinks: Object.values(state.drinks)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getData: () => dispatch(getData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DrinkCard);