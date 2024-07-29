import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CreateFormComponent } from './create-form/create-form.component';

@Injectable({
  providedIn: 'root'
})
export class NotifyGuard implements CanDeactivate<unknown> {
  canDeactivate(
    component: CreateFormComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(component.userForm.dirty){
        return confirm("If you go back your data will be not be saved. Are you willing to go back?");
      }
      else{
        return true;
      }
   
  }

  
  
}
