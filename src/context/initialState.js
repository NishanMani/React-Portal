const storedUser = localStorage.getItem("user")

export const initialState = {
  user: storedUser ? JSON.parse(storedUser) : null,
  isAuthenticated: storedUser ? true : false,
  theme: localStorage.getItem("theme") || "light"
}