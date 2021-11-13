import {Injectable} from '@angular/core';

import {UserLabel} from "../model/user-label";

@Injectable({
  providedIn: 'root'
})
export class BuildInfoService {

  /**
   * function with switch for switch by type icon and return label and text as object
   * @param type
   * @param prop
   */
  switcherBuilder(type: string, prop: object | any): UserLabel | null {
    switch (type) {
      case 'name':
        return {
          label: 'Hi, My name is',
          text: `${prop?.first} ${prop?.last}`
        };
        break;
      case 'email':
        return {
          label: 'My email address is',
          text: `${prop}`
        };
        break;
      case 'calendar':
        return {
          label: 'My birthday is',
          text: this.buildBirthDate(prop?.date)
        };
        break;
      case 'map':
        return {
          label: 'My address is',
          text: `${prop?.number} ${prop?.name}`
        };
        break;
      case 'cell':
        return {
          label: 'My phone number is',
          text: `${prop}`
        };
        break;
      case 'psw':
        return {
          label: 'My password is',
          text: `${prop?.password}`
        };
        break;

      default:
        return null;
    }
  }

  /**
   * Build birthday format and return by string
   * @param data
   * @private
   */
  private buildBirthDate(data: Date): string {
    const date = new Date(data)
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
  }

}
