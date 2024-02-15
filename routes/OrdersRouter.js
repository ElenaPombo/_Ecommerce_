import { Router } from "express";
import OrdersController from "../controllers/OrdersController";

const CategoriesRouter = Router();
OrdersRouter.route("/").get(OrdersController.getAllOrders);
OrderssRouter.route("/:id").get(OrdersController.getOrder);
OrdersRouter.route("/").post(OrdersController.addOrder);
OrdersRouter.route("/:id").put(OrdersController.updateOrder);
OrdersRouter.route("/:id").delete(OrdersController.deleteOrder);

export default OrdersRouter;