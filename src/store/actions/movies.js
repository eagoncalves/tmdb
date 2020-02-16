export function setActionsMovie(filtering, loading, searchedMovie) {
  return {
    type: 'SET_ACTIONS_MOVIES',
    filtering,
    loading,
    searchedMovie
  }
}
