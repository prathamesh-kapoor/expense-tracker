import express from "express";
import { getTransactions,addExpense, deleteExpense} from "../controllers/transController.js";
import { getIncome, addIncome, deleteIncome } from "../controllers/incomeController.js";

const router = express.Router();

//income routes 
router.get('/get-expenses', getTransactions)

router.post('/add-expense', addExpense)

router.delete('/delete-expense/:id', deleteExpense)

//expense routes
router.get("/get-income", getTransactions);

router.post("/post-income", addIncome);

router.delete('/delete-income/:id', deleteIncome)


export default router;