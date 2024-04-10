// import { useQuery } from "react-query";
// import { useQuery } from "react-query";
import { useQuery } from "@tanstack/react-query";
import { getAdvice } from "../services/adviceApi";

function useAdvice() {
  const {
    isLoading,
    data: { slip } = {},
    error,
    refetch,
  } = useQuery({
    queryKey: ["advice"],
    queryFn: getAdvice,
    onSuccess: () => {
   
    },
  });
  console.log(slip,isLoading);
  return { slip, isLoading, error,refetch};
}

export default useAdvice;
