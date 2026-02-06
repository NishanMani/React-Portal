export function login(email, password) {
  if (email === "admin@gmail.com" && password === "admin123") {
    return {
      id: 1,
      name: "Admin User",
      email,
      role: "Admin"
    }
  }

  return null
}
