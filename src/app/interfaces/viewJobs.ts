export interface ViewJobs {
  type: string;
  message: string;
  data: Datum[];
}

export interface Datum {
  id: number;
  user_id: string;
  request_id: string;
  project_id: string;
  notification_accepted: string;
  user_accepted: string;
  created_at: string;
  updated_at: string;
  canceled: string;
  project: Project;
  request_worker: Requestworker;
}

export interface Requestworker {
  id: number;
  trade_id: string;
  experience: string;
  quantity_workers: string;
  start_date: string;
  end_date: string;
  weekdays: string;
  start_time: string;
  end_time: string;
  project_id: string;
  task: string;
  status: string;
  is_deleted: string;
  created_at: string;
  updated_at: string;
  cost: string;
}

export interface Project {
  id: number;
  name: string;
  consecutive: string;
  address: string;
  supervisor_name: string;
  supervisor_phone: string;
  description: string;
  break_time: string;
  paid_break_time: string;
  overtime: string;
  user_id: string;
  status: string;
  created_at: string;
  updated_at: string;
  user: User;
}

interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  type: string;
  phone_number: string;
  profile_image: string;
  address?: string;
  email_verified_at?: any;
  rating?: string;
  confirmed: string;
  active: string;
  steps: string;
  code: string;
  status: string;
  created_at: string;
  updated_at: string;
  transport?: string;
  facebook_login: string;
  facebook_token?: any;
  working_days?: string;
  onesignal_id?: any;
  location?: Location;
}

export interface Location {
  type: string;
  coordinates: number[];
}