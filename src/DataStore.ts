import BookSwap from "./BookSwap";

export default class DataStore {

    private static instance: DataStore;
    private store : Map<string,BookSwap> = new Map();

    static getInstance() {
        if (DataStore.instance) {
            return this.instance;
        }
        this.instance = new DataStore();
        return this.instance;

    }

    public addBookSwap(bookSwap: BookSwap): void {
        this.store.set(bookSwap.id, bookSwap);
    }

    public getBookSwap(bookSwapId: string): BookSwap | undefined {
        const data = this.store.get(bookSwapId);
        if (!data) {
            throw new Error(`BookSwap not found: ${bookSwapId}`);
        }
        return data;
    }

    public bookSwapByIdExists(bookSwapId: string): boolean {
        return this.store.has(bookSwapId);
    }

}
