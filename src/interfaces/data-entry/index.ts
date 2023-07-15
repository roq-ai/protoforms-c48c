import { TableInterface } from 'interfaces/table';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface DataEntryInterface {
  id?: string;
  content: string;
  table_id?: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;

  table?: TableInterface;
  user?: UserInterface;
  _count?: {};
}

export interface DataEntryGetQueryInterface extends GetQueryInterface {
  id?: string;
  content?: string;
  table_id?: string;
  user_id?: string;
}
