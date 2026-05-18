

import BookSwapImage from './BookSwapImage';

export default class ImageStore {

    private static instance: ImageStore;
    private store : Map<string,BookSwapImage> = new Map();

    static getInstance() {
        if (ImageStore.instance) {
            return this.instance;
        }
        this.instance = new ImageStore();
        return this.instance;

    }

    public addImage(id: string,  image: BookSwapImage): void {
        this.store.set(id, image);
    }

    public getImage(bookSwapId: string): BookSwapImage | undefined {
        const data: BookSwapImage | undefined = this.store.get(bookSwapId);
        if (!data) {
            throw new Error(`BookSwap Image not found: ${bookSwapId}`);
        }
        return data;
    }

    public bookSwapImageByIdExists(bookSwapId: string): boolean {
        return this.store.has(bookSwapId);
    }

}
