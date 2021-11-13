import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {faCalendar, faEnvelope, faLock, faMapMarked, faMicrophone, faUser} from '@fortawesome/free-solid-svg-icons';
import {SizeProp} from "@fortawesome/fontawesome-svg-core";

import {Result} from "../../model/user-random";
import {UserLabel} from "../../model/user-label";
import {IconOutput} from "../../model/icon-output";


@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserInfoComponent {

  /**
   * user from input for show info by icons
   */
  @Input() userRandom: Result | null = null;
  /**
   * Label input for show label and text
   */
  @Input() userLabel: UserLabel | null = null;
  /**
   * Output the icon selected whit props
   */
  @Output() iconSelected: EventEmitter<IconOutput> = new EventEmitter<IconOutput>();

  /**
   * Font size for icon
   */
  sizeFont: SizeProp = '2x';
  /**
   * All icons fors how
   */
  faUser = faUser;
  faVoicemail = faEnvelope;
  faCalendar = faCalendar;
  faMapMarked = faMapMarked;
  faMicrophone = faMicrophone;
  faLock = faLock;
  /**
   * type icon selected for display color
   */
  typeIcon = '';

  /**
   * Emit the type and prop when mouseover on icon
   * @param type
   * @param prop
   */
  getTypeInfoUser(type: string, prop: any) {
    this.typeIcon = type;
    this.iconSelected.emit({type, prop})
  }

  /**
   * get color for icon is the mouseover in the same icon
   * @param name
   */
  getColor(name: string) {
    return this.typeIcon === name ? 'green' : 'gray';
  }
}
