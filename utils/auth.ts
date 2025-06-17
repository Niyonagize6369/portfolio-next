export function isLoggedIn() {
    return !!localStorage.getItem("token");
  }
  
  export function isAdmin() {
    return localStorage.getItem("role") === "admin";
  }
  
  