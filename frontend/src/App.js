
import React, {useState, useMemo} from 'react'
import styled from 'styled-components';
import bg from './img/bg.png'
import { MainLayout } from './styles/mainLayout';
import Orb from "./components/orb/orb.js"
import Navigation from './components/Navigation/navigation'
import Income from "./components/income/income.js"
import Dashboard from "./components/DashBoard/Dashboard.js"
import Expenses from "./components/expenses/expenses.js"
import Transaction from './components/Transaction/transaction.js';
import { useGlobalContext } from './context/globalContext.js';


function App() {
  const [active, setActive] = useState(1)
 

  const displayData = () => {
    switch(active){
      case 1:
        return <Dashboard />
      case 2:
        return <Transaction />
      case 3:
        return <Income />
      case 4: 
        return <Expenses />
      default: 
        return <Dashboard />
    }
  }

  return (
    <AppStyled bg={bg} className="App">
    
   <MainLayout>
    <Navigation active={active} setActive={setActive}/>
    <main>
    {displayData()}
    </main>
    </MainLayout>
    </AppStyled>
  ); 
}


// applied some css and named it as app styled 
// we will import bg from image folder and wrap it inside the css div compnenet created 
const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${props => props.bg});
  position: relative;
  main{
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar{
      width: 0;
    }
  }
`;



export default App;
