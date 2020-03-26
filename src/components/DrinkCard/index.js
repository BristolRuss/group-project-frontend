import { connect } from 'react-redux';
import DrinkCard from './DrinkCard';
import { getCocktails } from '../../data/actions';

const mapStateToProps = (state, props) => {
    return {
        drinks: Object.values(state.drinks).filter((drink) => {
            const result = drink.ingredients.some((ingredient) => {
                return ingredient.id === +props.id
            })
            return result
        }),
        spirits: state.spirits
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        getData: () => dispatch(getCocktails(props.id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DrinkCard);