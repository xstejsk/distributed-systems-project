export type User = {
  id: string;
  name: string;
  username: string;
  href?: string;
};

export type Transaction = {
  id: string;
  user: User;
  type: string;
  amount: number;
  date: string;
  status: string;
};

type APIResponse = {
  count: number;
  offset: number;
  total: number;
};

export type TransactionData = APIResponse & {
  entries: Transaction[];
};
