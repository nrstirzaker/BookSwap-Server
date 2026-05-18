export default class DataStore {
    static instance;
    store = new Map();
    static getInstance() {
        if (DataStore.instance) {
            return this.instance;
        }
        this.instance = new DataStore();
        return this.instance;
    }
    addBookSwap(bookSwap) {
        this.store.set(bookSwap.id, bookSwap);
    }
    getBookSwap(bookSwapId) {
        const data = this.store.get(bookSwapId);
        if (!data) {
            throw new Error(`BookSwap not found: ${bookSwapId}`);
        }
        return data;
    }
    bookSwapByIdExists(bookSwapId) {
        return this.store.has(bookSwapId);
    }
}
