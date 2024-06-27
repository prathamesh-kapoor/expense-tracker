import express from "express";
import { getExpenses,addExpense, deleteExpense} from "../controllers/transController.js";
import { getIncomes, addIncome, deleteIncome } from "../controllers/incomeController.js";

const router = express.Router();

//income routes 
router.get('/get-expenses', getExpenses)

router.post('/post-expense', addExpense)

router.delete('/delete-expense/:id', deleteExpense)

//expense routes
router.get("/get-incomes", getIncomes);

router.post("/post-income", addIncome);

router.delete('/delete-income/:id', deleteIncome);


export default router;