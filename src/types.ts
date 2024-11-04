export interface Phone {
  id: string;
  model: string;
  imei: string;
  status: 'reception' | 'diagnostic' | 'repair' | 'testing' | 'quality' | 'ready';
  issues: string[];
  assignedTo?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Technician {
  id: string;
  name: string;
  role: 'technician' | 'quality' | 'logistics';
  activeRepairs: number;
  successRate: number;
}