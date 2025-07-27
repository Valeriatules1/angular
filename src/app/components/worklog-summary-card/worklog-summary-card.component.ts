import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkLogSummary } from '../../interfaces/worklog-summary.interface';

@Component({
  selector: 'worklog-summary-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './worklog-summary-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorklogSummaryCardComponent {
  @Input({ required: true }) worklogData!: WorkLogSummary;

  /**
   * Get role-specific styling classes
   */
  getRoleClasses(): string {
    const baseClasses = 'role-badge';
    
    switch (this.worklogData.user.role) {
      case 'admin':
        return `${baseClasses} role-admin`;
      case 'manager':
        return `${baseClasses} role-manager`;
      case 'employee':
        return `${baseClasses} role-employee`;
      default:
        return `${baseClasses} role-employee`;
    }
  }

  /**
   * Get card border styling based on role
   */
  getCardBorderClasses(): string {
    switch (this.worklogData.user.role) {
      case 'admin':
        return 'border-l-4 border-l-blue-500 dark:border-l-blue-400';
      case 'manager':
        return 'border-l-4 border-l-green-500 dark:border-l-green-400';
      case 'employee':
        return 'border-l-4 border-l-gray-400 dark:border-l-gray-500';
      default:
        return 'border-l-4 border-l-gray-400 dark:border-l-gray-500';
    }
  }

  /**
   * Get role icon for display
   */
  getRoleIcon(): string {
    switch (this.worklogData.user.role) {
      case 'admin':
        return 'shield';
      case 'manager':
        return 'users';
      case 'employee':
        return 'user';
      default:
        return 'user';
    }
  }

  /**
   * Format week display
   */
  getFormattedWeek(): string {
    const [year, week] = this.worklogData.week.split('-W');
    return `Week ${week}, ${year}`;
  }

  /**
   * Handle view details click
   */
  onViewDetails(): void {
    // In a real application, this would emit an event or navigate
    console.log('View details clicked for:', this.worklogData.user.name);
  }

  /**
   * Handle avatar error (fallback to initials)
   */
  onAvatarError(event: Event): void {
    const target = event.target as HTMLImageElement;
    target.style.display = 'none';
    
    // Show the fallback initials
    const fallback = target.nextElementSibling as HTMLElement;
    if (fallback) {
      fallback.style.display = 'flex';
    }
  }

  /**
   * Get user initials for avatar fallback
   */
  getUserInitials(): string {
    return this.worklogData.user.name
      .split(' ')
      .map(name => name.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2);
  }
}
