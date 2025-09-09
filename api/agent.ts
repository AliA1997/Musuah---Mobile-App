import axios, { AxiosResponse, AxiosError } from 'axios';
import { PaginatedResult } from '../models/common';
import i18n from '../app/i18n/index';
import { searchApi } from './searchApi';
import { wikiBooksApi } from './wikibooksApi';
import { wikipagesApi } from './wikipagesApi';
import { dashboardApi } from './dashboardApi';

export const axiosResponseBody = (res: AxiosResponse) => res.data;

axios.defaults.baseURL = 'https://2c02fddb-4d1d-48ee-9242-8382abdc6164.us-east-1.cloud.genez.io/';


axios.interceptors.response.use(
  async (response: any) => {
    const pagination = response.headers["pagination"];
    if (pagination) {
      response.data = new PaginatedResult(
        response.data,
        JSON.parse(pagination)
      );
      return response as AxiosResponse<PaginatedResult<any>>;
    }
    return response;
  },
  (error: AxiosError) => {
    const myResponse = error.response as AxiosResponse;
    const modalStateErrors = [];
    if (!myResponse?.status) {
      modalStateErrors.push(i18n.t(error.message, { ns: "errors" } as any));
      return Promise.reject(modalStateErrors);
    }

    switch (myResponse.status) {
      case 400:
        if (
          myResponse.config.method === "get" &&
          myResponse.data.errors.hasOwnProperty("id")
        ) {

        }
        if (myResponse.data.errors) {
          for (const key in myResponse.data.errors) {
            if (myResponse.data.errors[key]) {
              modalStateErrors.push(
                i18n.t(myResponse.data.errors[key], { ns: "errors" } as any)
              );
            }
          }
          throw modalStateErrors.flat();
        } else {
          modalStateErrors.push(i18n.t(myResponse.data, { ns: "errors" } as any));
          throw modalStateErrors.flat();
        }
      case 401:
        if (myResponse.data === "invalid_token") {
        } else {
          throw myResponse.data.message;
        }
        break;
      case 403:
        break;
      case 404:
        break;
      case 413:
        modalStateErrors.push(i18n.t(myResponse.data.message, { ns: "errors" } as any));
        throw modalStateErrors.flat();
      case 418: 
        break;
      case 500:
        break;
      default:
        break;
    }

    return Promise.reject(error);
  }
);

const agent = {
  dashboard: dashboardApi,
  search: searchApi,
  wikiBooks: wikiBooksApi,
  wikiPages: wikipagesApi
};

export const getAuthorizationHeader = (token: string) => ({
      headers: {
          Authorization: `Bearer ${token}`
      }
  })

export default agent;