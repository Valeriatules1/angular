export interface WorkLogSummary {
  user: {
    name: string;
    avatarUrl?: string;
    role: 'admin' | 'manager' | 'employee';
  };
  week: string; // e.g. "2025-W28"
  totalHours: number;
  projectName: string;
  canViewDetails: boolean;
}
