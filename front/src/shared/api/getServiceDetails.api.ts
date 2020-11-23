import Axios from "axios";
import { ENV } from "../constants";
import { Api } from "../enums";
import { Service } from "../types";

export const getApiDetails = async (serviceId: string) => {
    try {
        const response = await Axios.get<Service>(
            `${ENV.BACKEND_URL}/${Api.Service}/${serviceId}`
        );
        return response.data;
    } catch (error) {
        throw new Error(error);
    }
};
