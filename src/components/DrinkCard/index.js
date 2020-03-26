import { connect } from 'react-redux';
import DrinkCard from './DrinkCard';
import { getCocktails } from '../Data/actions';

const mapStateToProps = (state) => {
    return {
        drinks: Object.values(state.drinks)
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        getData: () => dispatch(getCocktails(props.id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DrinkCard);