import { useEffect, useState } from "react";
import * as api from "./api";

const useApp = () => {
  const [data, setData] = useState({
    all: null,
    describeTotal: null,
    yearlyTotal: null,
    provinceTotal: null,
    linearRegression: null,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(null);

        const resolve = await Promise.all([
          api.loadData(),
          api.describeTotal(),
          api.yearlyTotal(),
          api.provinceTotal(),
          api.linearRegression(),
        ]);

        const [
          all,
          describeTotal,
          yearlyTotal,
          provinceTotal,
          linearRegression,
        ] = resolve.map((promise) => promise.data);

        setData({
          all,
          describeTotal,
          yearlyTotal,
          provinceTotal,
          linearRegression,
        });
      } catch (error) {
        if (error?.message) setError(error.message);
        else setError("Error fetching data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  return { data, loading, error };
};

export default useApp;
