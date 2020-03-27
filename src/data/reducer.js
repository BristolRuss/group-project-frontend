const setCocktails = (state, action) => {
	const newState = {
		...state,
		drinks: {
			...state.drinks
		}
	}
	action.forEach(drink => {
		newState.drinks[drink.id] = drink;
	});
	return newState;
}

const setDrink = (state, action) => {
	const newState = {
		...state,
		drinks: {
			...state.drinks,
			[action.id]: action
		}
	}
	return newState;
}

const verified = (state, action) => {
	const newState = {
		...state,
		verified: true
	}
	return newState;
}

const reducer = (state, action) => {
    switch(action.type) {
		case "SETCOCKTAILS": return setCocktails(state, action.data); 
		case "SETDRINK": return setDrink(state, action.data.data); 
		case "VERIFIED": return verified(state, action)
        default: return state;
    }
};

export default reducer;