const cookieKey = "ADMIN-KEY"

export function getCookie() {
  return localStorage.getItem(cookieKey)
}

export function setCookie(value: string) {
  return localStorage.setItem(cookieKey, value)
}

export function removeCookie() {
  return localStorage.removeItem(cookieKey)
}
