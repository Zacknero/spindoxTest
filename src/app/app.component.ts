import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, take} from "rxjs";

import {Result, UserRandom} from "./model/user-random";
import {BuildInfoService} from "./service/build-info.service";
import {UserLabel} from "./model/user-label";
import {IconOutput} from "./model/icon-output";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  /**
   * User loaded from server
   */
  userRandom: Result | null = null;

  /**
   * User object for show label and text from service
   */
  userLabel: UserLabel | null = null;

  constructor(private httpClient: HttpClient, private buildInfoService: BuildInfoService) {
    this.loadUserRandom();
  }

  /**
   * Function to call first time the random user
   * @private
   */
  private loadUserRandom() {
    this.httpClient.get<UserRandom>('https://randomuser.me/api')
      .pipe(
        take(1),
        map(response => response.results ? response.results[0] : null))
      .subscribe(val => {
        this.userRandom = val;
      })
  }

  /**
   * Function accept input param as IconOutput and call the service for manipulate string label and text
   * @param obj
   */
  getTypeInfoUser(obj: IconOutput) {
    this.userLabel = this.buildInfoService.switcherBuilder(obj.type, obj.prop);
  }
}
