import { connect } from 'react-redux';
import DrinkCard from './DrinkCard';

const mapStateToProps = (state) => {
    return {
        drinks: Object.values(state.drinks)
    }
}

export default connect(mapStateToProps)(DrinkCard);