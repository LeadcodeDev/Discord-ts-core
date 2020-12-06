import { AxiosRequestConfig, AxiosResponse } from 'axios';
declare class Axios {
    configuration: AxiosRequestConfig;
    /**
     * Get collection of resources from API server
     * @param url String
     * @returns Promise<AxiosResponse<any>>
     */
    get(url: string): Promise<AxiosResponse<any>>;
    /**
     * Create resources from API server
     * @param url String
     * @param data Data<any>
     * @returns Promise<AxiosResponse<any>>
     */
    post(url: string, data: any): Promise<AxiosResponse<any>>;
    /**
     * Update resources from API server
     * @param url String
     * @param data Data<any>
     * @returns Promise<AxiosResponse<any>>
     */
    put(url: string, data: any): Promise<AxiosResponse<any>>;
    /**
     * Delete resources from API server
     * @param url String
     * @returns Promise<AxiosResponse<any>>
     */
    delete(url: string): Promise<AxiosResponse<any>>;
}
declare const _default: Axios;
export default _default;
