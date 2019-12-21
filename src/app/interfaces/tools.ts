export interface Tools {
  type: string;
  message: string;
  data: dtsT[];
}

export interface dtsT {
  id: number;
  description: string;
  worker_visible: string;
  contractor_visible: string;
  created_at: string;
  updated_at: string;
}