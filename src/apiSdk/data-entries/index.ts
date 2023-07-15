import axios from 'axios';
import queryString from 'query-string';
import { DataEntryInterface, DataEntryGetQueryInterface } from 'interfaces/data-entry';
import { GetQueryInterface } from '../../interfaces';

export const getDataEntries = async (query?: DataEntryGetQueryInterface) => {
  const response = await axios.get(`/api/data-entries${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createDataEntry = async (dataEntry: DataEntryInterface) => {
  const response = await axios.post('/api/data-entries', dataEntry);
  return response.data;
};

export const updateDataEntryById = async (id: string, dataEntry: DataEntryInterface) => {
  const response = await axios.put(`/api/data-entries/${id}`, dataEntry);
  return response.data;
};

export const getDataEntryById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/data-entries/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteDataEntryById = async (id: string) => {
  const response = await axios.delete(`/api/data-entries/${id}`);
  return response.data;
};
