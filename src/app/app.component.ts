import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorklogSummaryCardComponent } from './components/worklog-summary-card/worklog-summary-card.component';
import { WorkLogSummary } from './interfaces/worklog-summary.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, WorklogSummaryCardComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Worklog Summary Card Demo';

  // Sample data for demonstration
  worklogSummaries: WorkLogSummary[] = [
    {
      user: {
        name: 'Sarah Chen',
        avatarUrl: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face',
        role: 'admin'
      },
      week: '2025-W30',
      totalHours: 42.5,
      projectName: 'ERP System Redesign',
      canViewDetails: true
    },
    {
      user: {
        name: 'Michael Rodriguez',
        avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
        role: 'manager'
      },
      week: '2025-W30',
      totalHours: 38.0,
      projectName: 'Customer Portal Development',
      canViewDetails: true
    },
    {
      user: {
        name: 'Emily Johnson',
        role: 'employee'
      },
      week: '2025-W30',
      totalHours: 40.0,
      projectName: 'Mobile App Testing',
      canViewDetails: false
    },
    {
      user: {
        name: 'David Kim',
        avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
        role: 'employee'
      },
      week: '2025-W30',
      totalHours: 35.5,
      projectName: 'API Integration',
      canViewDetails: true
    }
  ];

  toggleDarkMode(): void {
    document.documentElement.classList.toggle('dark');
  }

  trackByUser(index: number, worklog: WorkLogSummary): string {
    return worklog.user.name;
  }
}
