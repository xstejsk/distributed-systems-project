export type Page<T> = {
  content: T[];
  number: number;
  size: number;
  totalElements: number;
  totalPages: number;
  last: boolean;
  first: boolean;
  empty: boolean;
  pageable: Pageable;
};

export type Account = {
  id: number;
  balance: number;
  customer: string;
};

export type Transaction = {
  id: number;
  amount: number;
  timestamp: string;
  deposit: boolean;
  account: Account;
};

type Pageable = {
  pageNumber: number;
  pageSize: number;
  offset: number;
};
