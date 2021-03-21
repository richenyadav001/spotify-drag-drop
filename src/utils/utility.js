export const getValueFromQueryParam = (key) => {
    const queryString = window.location.hash.replace('#', '?');
    var searchParams = new URLSearchParams(queryString);
    if (searchParams.has(key)) {
        return searchParams.get(key);
    } else {
        return '-';
    }
}

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) {
            return [];
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch {
        // ignore write errors
    }
};