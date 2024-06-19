import React from "react"
import styled from "styled-components";
import { InnerLayout } from "../../styles/mainLayout";
import { useGlobalContext } from "../../context/globalContext";
import Form from "../form/form.js";

function Income(){
  const {addIncome } = useGlobalContext()
    return (
        <IncomeStyled>
          <InnerLayout>
           <h1>Incomes</h1>
           <div className="income-content">
            <div className="form-content">
              <div className="incomes">
                <Form/>
              </div>
            </div>
           </div>
          </InnerLayout>
        </IncomeStyled>
    )
}

const IncomeStyled = styled.div`

`;

export default Income