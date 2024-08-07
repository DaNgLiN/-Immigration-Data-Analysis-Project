import axios from "../libs/axios";

export const loadData = () => axios.get("/load-data");

export const describeTotal = () => axios.get("/describe-total");

export const yearlyTotal = () => axios.get("/yearly-totals");

export const provinceTotal = () => axios.get("/province-totals");

export const linearRegression = () => axios.get("/train-linear-regression");

export const predict = (payload) => axios.post("/predict", payload);
