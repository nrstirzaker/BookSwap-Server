import DataStore from '../src/DataStore';
import {BookSwapFakeData} from "./BookSwapFakeData.ts";


const store = DataStore.getInstance();

async function loadFakeData()  {
    const fakeData0 = BookSwapFakeData[0];
    const fakeData1 = BookSwapFakeData[1];

    store.addBookSwap(fakeData0);
    store.addBookSwap(fakeData1);
    console.log("fake data loaded")
}

await loadFakeData()

