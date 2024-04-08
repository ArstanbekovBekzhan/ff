import axios from 'axios';
import {API_URL} from './api.constants';
import {AuthService} from "@/services/auth/auth.service";

export const getContentType = () => ({
    'Content-Type': 'application/json'
});

export const axiosClassic = axios.create({
    baseURL: API_URL,
    headers: getContentType(),
    withCredentials: true,
});

export const axiosMultipart = axios.create({
    baseURL: API_URL,
    withCredentials: true,
});
