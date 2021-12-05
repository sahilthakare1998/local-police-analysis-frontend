import Axios from "axios";
import { baseUrl } from "./constants";


export const getAdminGraphDetails = async () => {
    let response = await Axios
      .get(
        `${baseUrl}masterdata/get-line-graph-data`
      )
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error.response;
      });
    return response;
  };

  export const getGraphDetail = async (date) => {
    let response = await Axios
      .get(
        `${baseUrl}masterdata/get-line-graph-data-filter?startDate=${date[0]}&endDate=${date[1]}`
      )
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error.response;
      });
    return response;
  };


  export const getRadarGraphDetailsExamine = async () => {
    let response = await Axios
      .get(
        `${baseUrl}masterdata/get-radar-graph-data-examine`
      )
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error.response;
      });
    return response;
  };


  export const getTableData = async () => {
    let response = await Axios
      .get(
        `${baseUrl}masterdata`
      )
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error.response;
      });
    return response;
  };


  export const getRadarGraphDetailsOffence = async () => {
    let response = await Axios
      .get(
        `${baseUrl}masterdata/get-radar-graph-data`
      )
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error.response;
      });
    return response;
  };


  