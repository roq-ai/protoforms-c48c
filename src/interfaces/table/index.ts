import { DataEntryInterface } from 'interfaces/data-entry';
import { ClientInterface } from 'interfaces/client';
import { GetQueryInterface } from 'interfaces';

export interface TableInterface {
  id?: string;
  name: string;
  client_id?: string;
  created_at?: any;
  updated_at?: any;
  data_entry?: DataEntryInterface[];
  client?: ClientInterface;
  _count?: {
    data_entry?: number;
  };
}

export interface TableGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  client_id?: string;
}
