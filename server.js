import cors from "cors";
import express from 'express';
import multer from 'multer';
import DataStore from './src/DataStore';
import './FakeData/LoadFakeData.js';
// Adds headers: Access-Control-Allow-Origin: *
const port = 3000;
const upload = multer({
    storage: multer.memoryStorage()
});
const app = express();
//app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded());
app.use(cors());
const store = DataStore.getInstance();
app.get("/", (req, res) => {
    res.send("hello world");
});
app.get("/api/bookswap/:bookswapId", (req, res) => {
    const id = req.params.bookswapId;
    const exists = store.bookSwapByIdExists(id);
    if (exists) {
        const data = store.getBookSwap(id);
        if (data) {
            res.send(data);
        }
    }
    else {
        res.send({ "status": "error", "errorMessage": "BookSwap not found" });
    }
});
app.post("/api/bookswap", upload.single("image"), (req, res) => {
    console.log(req.body);
    const id = req.body.id;
    const bookswapData = {
        "id": id,
        "location_nameOfEstablishment": req.body.location_nameOfEstablishment,
        "location_whatThreeWords": req.body.location_whatThreeWords,
        "location_address": req.body.location_address,
        "location_openingTimes": req.body.location_openingTimes,
        "about": req.body.about,
        "image_reference": req.body.image_reference,
        "ageRangeTeens": req.body.ageRangeTeens,
        "ageRangeChildren": req.body.ageRangeChildren
    };
    const imageBuffer = req.file.buffer;
    store.addBookSwap(bookswapData);
    res.send({ "status": "success" });
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
