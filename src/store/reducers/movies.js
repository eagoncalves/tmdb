const INITIAL_STATE = {
  filtering: false,
  loading: true,
  searchedMovie: {}
};

export default function navigation(state = INITIAL_STATE, action) {
  if (action.type === 'SET_ACTIONS_MOVIES') {
    return {
      filtering: action.filtering,
      loading: action.loading,
      searchedMovie: action.searchedMovie
    }
  }
  return state;
}