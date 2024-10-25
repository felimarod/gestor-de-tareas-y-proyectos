import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private stateLogKey = 'logState';

  constructor(private router: Router) {}

  login(user: string, password: string): boolean {
    if (user === 'admin' && password === 'admin') {
      this.setLogState('Logged in');
      return true;
    }
    return false;
  }

  private setLogState(state: string): void {
    localStorage.setItem(this.stateLogKey, state);
  }

  private getLogState(): string | null {
    return localStorage.getItem(this.stateLogKey);
  }

  isAuthenticated(): boolean {
    const logState = this.getLogState();
    if (!logState) return false;
    else return logState === 'Logged in';
  }

  logout() {
    localStorage.removeItem(this.stateLogKey);
    this.router.navigate(['/login']);
  }
}
