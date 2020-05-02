export const save = (key, str) => {
    localStorage.setItem(key, str);
}
export const load = (key) => {
    return localStorage.getItem(key);
}