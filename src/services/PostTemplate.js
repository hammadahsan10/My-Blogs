import axios from "axios";
import { toast } from "react-toastify";
import { baseURL } from "../Config/env";

export const handlePostRequest =
    (data, url) =>
    async () => {
        // data = await trimData(data);
        try {
            const response = await axios({
                method: "post",
                url: `${baseURL + url}`,
                data: data,
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
        
            return response?.data;
        } catch (error) {
        
            if (error?.response?.status === 400 || error?.response?.status === 500) {
                toast.warn(error?.response?.data?.message || "Something went wrong !!");
            } else {
                toast.warn(error?.response?.data?.message || "Something went wrong !!");
            }
            return error?.response;
        }
    };
