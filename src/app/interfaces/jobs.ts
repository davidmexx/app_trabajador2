export interface Jobs {
  type: string;
  message: string;
  data: jobsDetail[];
}

export interface jobsDetail {
  id: string;
  type: string;
  notifiable_type: string;
  notifiable_id: string;
  data: Data;
  read_at?: any;
  created_at: string;
  updated_at: string;
}

export interface Data {
  title: string;
  data: string;
  request_id: number | string;
}