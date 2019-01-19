export default {
    get(key) {
        const data = localStorage[key];
        try {
            return JSON.parse(data);
        }
        catch (e) {
            return data;
        }
    },
    set(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        }
        catch (e) { localStorage.setItem(key, value); }
    },
    remove(key) {
        localStorage.removeItem(key);
    }
}