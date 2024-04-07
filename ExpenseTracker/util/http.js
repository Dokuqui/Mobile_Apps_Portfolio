import axios from "axios";
import Config from "react-native-config";

const BACKEND_URL =
  "https://react-native-corse-36bc5-default-rtdb.europe-west1.firebasedatabase.app";

export async function storeExpense(expenseData) {
  const response = axios.post(BACKEND_URL + "/expense.json", expenseData);

  const id = response.data.name;

  return id;
}

export async function fetchExpenses() {
  const response = await axios.get(BACKEND_URL + "/expense.json");

  const expenses = [];

  for (const key in response.data) {
    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    };

    expenses.push(expenseObj);
  }

  return expenses;
}

export function updateExpense(id, expenseData) {
  return axios.put(BACKEND_URL + `/expenses/${id}.json`, expenseData);
}

export function deleteExpense(id) {
  return axios.delete(BACKEND_URL + `/expenses/${id}.json`);
}
