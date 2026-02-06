export function AppReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true
      }

    case "LOGOUT":
      return {
        ...state,
        user: null,
        isAuthenticated: false
      }

    case "TOGGLE_THEME":
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light"
      }
    case "UPDATE_USER":
      return {
        ...state,
        user: action.payload
  }

    default:
      return state
  }
}
