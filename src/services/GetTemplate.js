import axios from "axios";
import { toast } from "react-toastify";
import { baseURL } from "../Config/env";

export const handleGetRequest = (url, isShowLoad = false) =>
        async (dispatch) => {
            try {
              
                const response = await axios.get(`${baseURL + url}`, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                });
              
                return response.data;
            } catch (error) {
              
                const id = toast.loading("Please wait...");
                if (error?.response?.status === 500) toast.update(id, { render: error?.response?.data?.message || "Something went wrong !!", type: "error", isLoading: false, autoClose: 3000 });
                else toast.update(id, { render: error?.response?.data?.message || "Something went wrong !!", type: "warn", isLoading: false, autoClose: 3000 });
            }
        };