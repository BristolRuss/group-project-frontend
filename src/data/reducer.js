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

const reducer = (state, action) => {
    switch(action.type) {
        case "SETCOCKTAILS": return setCocktails(state); 
        default: return state;
    }
};

export default reducer;

