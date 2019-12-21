export interface DetailProject {
  type: string;
  message: string;
  data: Data;
}

export interface Data {
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
  users: any[];
  project: Project;
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

export interface Project {
  id: number;
  name: string;
  consecutive: string;
  address: string;
  supervisor_name: string;
  supervisor_phone: string;
  description: string;
  break_time: Breaktime;
  paid_break_time: Breaktime;
  overtime: string;
  user_id: string;
  status: string;
  created_at: string;
  updated_at: string;
  user: User;
}

export interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  type: string;
  phone_number: string;
  profile_image: string;
  address?: any;
  email_verified_at?: any;
  rating?: any;
  confirmed: string;
  active: string;
  steps: string;
  code: string;
  status: string;
  created_at: string;
  updated_at: string;
  transport?: any;
  facebook_login: string;
  facebook_token?: any;
  working_days?: any;
  onesignal_id?: any;
  location?: any;
}

export interface Breaktime {
  id: number;
  description: string;
  number: string;
  worker_visible: string;
  contractor_visible: string;
  created_at: string;
  updated_at: string;
}