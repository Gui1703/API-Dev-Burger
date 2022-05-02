import { Router } from "express"
import multer from "multer"
import multerConfig from "./config/multer"
import ProductController from "./app/controllers/ProductController"
import SessionController from "./app/controllers/SessionController"
import UserController from "./app/controllers/UserController"
import authMiddleware from "./app/middlewares/auth"
import CategoryController from "./app/controllers/CategoryController"

const upload = multer(multerConfig)

const routes = new Router()

// Usuário
routes.post("/users", UserController.store)

// Sessão
routes.post("/sessions", SessionController.store)

routes.use(authMiddleware) // Será chamado por todas as rotas abaixo

// Produtos
routes.post("/products", upload.single("file"), ProductController.store)

routes.get("/products", ProductController.index)

// Categorias
routes.post("/categories", CategoryController.store)

routes.get("/categories", CategoryController.index)

export default routes
