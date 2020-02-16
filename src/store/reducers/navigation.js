const INITIAL_STATE = {
  navigation: {}
};

export default function navigation(state = INITIAL_STATE, action) {
  if (action.type === 'SET_NAVIGATION') {
    return {
      navigation: action.navigation
    }
  }
  return state;
}