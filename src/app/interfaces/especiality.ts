export interface Especiality {
  type: string;
  message: string;
  data: Datum[];
}

export interface Datum {
  id: number;
  name: string;
  trade_id: string;
  created_at: string;
  updated_at: string;
  trade: Trade;
}

export interface Trade {
  id: number;
  name: string;
  description: string;
  image: string;
  worker_visible: string;
  contractor_visible: string;
  created_at: string;
  updated_at: string;
}