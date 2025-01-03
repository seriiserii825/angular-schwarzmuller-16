export interface IAccount {
  id: number;
  name: string;
  status: 'active' | 'inactive' | 'unknown';
}
