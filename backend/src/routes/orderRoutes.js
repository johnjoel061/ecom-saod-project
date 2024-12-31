import express from "express";
import {createOrder, deleteAOrder, getAllOrders, getAOrderById, handleOrderReturn, handleOrderReturnStatus, updateAOrder, updateOrderStatus} from "../controllers/orderController.js";

const orderRouter = express.Router();

orderRouter.post("/", createOrder);
orderRouter.get("/", getAllOrders);
orderRouter.get("/", getAOrderById);
orderRouter.put("/", updateAOrder);
orderRouter.delete("/", deleteAOrder);

orderRouter.patch("/:id/status", updateOrderStatus);
orderRouter.patch("/:id/cancel", );
orderRouter.patch("/:id/return", handleOrderReturn);
orderRouter.patch("/:id/return/status", handleOrderReturnStatus);

 export default orderRouter;