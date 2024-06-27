import React from "react";
import axios from "axios"
import { useState,useContext } from "react";

const BASE_URL = "http://localhost:4000/api/node/";

const GlobalContext = React.createContext()

export const GlobalProvider = ({children}) =>{
 
    const [incomes, setIncomes] = useState([])
    const [expenses, setExpenses] = useState([])
    const [error, setError] = useState(null)
  
    // income functions
    const addIncome = async (income) => { 
        const response = await axios.post(`${BASE_URL}post-income`, income) // income is the payload that is the data to be added 
            .catch((err) =>{
                setError(err.response.data.message)
            })
            console.log("Income Added Successfully!")
            console.log(response);
        getIncomes()
    }

    const getIncomes = async () => {
        const response = await axios.get(`${BASE_URL}get-incomes`)
        setIncomes(response.data)
        console.log(response.data)
    }

    const deleteIncome = async (id) => {
        const res  = await axios.delete(`${BASE_URL}delete-income/${id}`)
        getIncomes()
    }
    
    // calculate income
    const totalIncome = () => {
        let totalIncome = 0;
        incomes.forEach((income) =>{
            totalIncome = totalIncome + income.amount
        })
        return totalIncome;
    }

     // expense functions 
     const addExpense = async (expense) => {
        const response = await axios.post(`${BASE_URL}post-expense`, expense)
            .catch((err) =>{
                setError(err.response.data.message)
            })
        getExpenses()
    }

    const getExpenses = async () => {
        const response = await axios.get(`${BASE_URL}get-expenses`)
        setExpenses(response.data)
        console.log(response.data)
    }

    const deleteExpense = async (id) => {
        const res  = await axios.delete(`${BASE_URL}delete-expense/${id}`)
        getExpenses()
    }

    const totalExpenses = () => {
        let totalExpense = 0;
        expenses.forEach((expense) =>{
            totalExpense = totalExpense + expense.amount
        })

        return totalExpense;
    }


    return (
        <GlobalContext.Provider value= {{
            addIncome, 
            getIncomes,
            incomes,
            setError,
            deleteIncome,
            totalIncome,
            addExpense,
            getExpenses,
            deleteExpense,
            totalExpenses,
            expenses
            }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () =>{
    return useContext(GlobalContext)
}