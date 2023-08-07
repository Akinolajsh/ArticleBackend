import express, {Router} from "express"
import { createCategory, viewCategory } from "../controller/categoryController"

const router = express.Router()
router.route("/view-category").get(viewCategory)
router.route("/:articleID/create-category").post(createCategory)


export default router