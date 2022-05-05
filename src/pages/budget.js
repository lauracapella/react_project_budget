import React, { useEffect, useState } from "react";
import Panell from "../Panell";
import { Panell2 } from "../Panell";

function Budget(props) {
  /* Modelo de datos */
  const [budget, setBudget] = useState({
    isweb: false,
    isseo: false,
    isads: false,
    pages: 1,
    lenguages: 1,
  });
  const [total, setTotal] = useState(0);

  /* Lógica */
 /*  0. Inicializacion */
 useEffect(() => {
  let newBudget = JSON.parse(localStorage.getItem('budget'))
  if(newBudget){
    setBudget(newBudget);
    calculateTotal();
  }
  }, []);

  /* 1. Modificar state */
  const updateBudget = (field, value) => {
    let newBudget = { ...budget };
    newBudget[field] = value;
    setBudget(newBudget);
    localStorage.setItem('budget', JSON.stringify(budget))
  };

  /* 2. Calcular total */
  useEffect(() => {
    calculateTotal();
  }, [budget]);

  const calculateTotal = () => {
    let newTotal =
      (budget.isweb ? 500 : 0) +
      (budget.isseo ? 300 : 0) +
      (budget.pages > 1 && budget.isweb ? (budget.pages - 1) * 30 : 0) +
      (budget.lenguages > 1 && budget.isweb ? (budget.lenguages - 1) * 30 : 0) +
      (budget.isads ? 200 : 0);
    setTotal(newTotal);
  };

  return (
    <>
      <p>¿Qué quieres hacer?</p>
      <div>
        <input
          type="checkbox"
          value="500"
          name="isweb"
          onChange={() => updateBudget("isweb", !budget.isweb)}
          defaultChecked={budget.isweb}
        />
        <label htmlFor="email">Web</label>
        {budget.isweb ? (
          <Panell2>
            <Panell
              updateBudget={updateBudget}
              budget={budget}
            />
          </Panell2>
        ) : (
          <span></span>
        )}
        <br />
        <input
          type="checkbox"
          value="300"
          name="isseo"
          onChange={() => updateBudget("isseo", !budget.isseo)}
          defaultChecked={budget.isseo}
        />
        <label htmlFor="email">Seo</label>
        <br />
        <input
          type="checkbox"
          value="300"
          name="isads"
          onChange={() => updateBudget("isads", !budget.isads)}
          defaultChecked={budget.isads}
        />
        <label htmlFor="email">Ads</label>
        <br />
        <p>Total: {total}</p>
      </div>
    </>
  );
}
export default Budget;
