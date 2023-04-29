import { useQuery } from "react-query";
import { getImgs } from "../api";

export const useImgs = () => {
    const { data, isLoading } = useQuery("imgs", getImgs);
    // console.log(data);
    return { data, isLoading };
};
