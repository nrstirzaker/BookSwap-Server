import cors from "cors";
import express, {type Request, type Response} from 'express';
import multer from 'multer';
import DataStore from './src/DataStore';
import ImageStore from './src/ImageStore';
import BookSwap from './src/BookSwap';
import BookSwapImage from './src/BookSwapImage';
import './FakeData/LoadFakeData.js';

const port = 3000;
const upload = multer({
    storage: multer.memoryStorage()
});


const app = express();
app.use(express.urlencoded());
app.use(cors());


const dataStore: DataStore = DataStore.getInstance();
const imageStore: ImageStore = ImageStore.getInstance();

app.get("/", (req: Request, res: Response) => {
    res.send("hello world");
});


app.get("/api/bookswap/:bookswapId", (req: Request, res:Response) => {
    console.log("Get BookSwap")
    const id: string  = <string>req.params.bookswapId;
    const exists: boolean = dataStore.bookSwapByIdExists(id);
    if (exists) {
        const data: BookSwap | undefined = dataStore.getBookSwap(id);
        if (data) {
            res.send(data)
        }
    } else {
        res.send({"status": "error", "errorMessage": "BookSwap not found"});
    }

})

app.get("/api/bookswap/:bookswapId/image", (req: Request, res: Response) => {
    console.log("Get image")
    const id: string  = <string>req.params.bookswapId;
    const exists: boolean = imageStore.bookSwapImageByIdExists(id);
    if (exists) {
        const data: BookSwapImage | undefined = imageStore.getImage(id);
        if (data) {
            console.log("image data found")
            res.contentType("image/jpeg")
            res.send(data.imageBuffer)
        }
    } else {
        res.send({"status": "error", "errorMessage": "BookSwap not found"});
    }

})


app.post("/api/bookswap", upload.single("image"), (req: Request, res: Response): void => {
    console.log("start")
    console.log(req.body);
    const id: string = req.body.id;
    console.log(req.file!.buffer)
    const imageBuffer: Buffer = req.file!.buffer;
    const bookswapData: BookSwap = {
        "id": id,
        "location_nameOfEstablishment": req.body.location_nameOfEstablishment,
        "location_whatThreeWords": req.body.location_whatThreeWords,
        "location_address": req.body.location_address,
        "location_openingTimes": req.body.location_openingTimes,
        "about": req.body.about,
        "image_reference": req.body.image_reference,
        "ageRangeTeens": req.body.ageRangeTeens,
        "ageRangeChildren": req.body.ageRangeChildren,
        "imageUrl": req.body.imageUrl
    }

    const bookswapImage: BookSwapImage = {
        "id": id,
        "imageBuffer": imageBuffer
    }
    //console.log("bookswapData: " + JSON.stringify(bookswapData));

    dataStore.addBookSwap(bookswapData);
    imageStore.addImage(id, bookswapImage);
    res.send({"status": "success"})

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
