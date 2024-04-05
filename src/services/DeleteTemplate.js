import axios from "axios";
import { toast } from "react-toastify";
import { baseURL } from "../Config/env";

export const handleDeleteRequest =
    (url, isShowLoad = false, isShowToast = true) =>
        async (dispatch) => {
            try {
                if (isShowLoad) dispatch(loadingAction(true));
                const response = await axios({
                    method: "delete",
                    url: `${baseURL + url}`,
                    headers: {
                        "Content-Type": "application/json",
                        authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                });
                if (isShowToast && response?.data) toast.success(response?.data?.message);
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
