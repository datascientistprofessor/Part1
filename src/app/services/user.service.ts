import {User} from "../user";
import {Injectable} from "@angular/core";
import {LoggingService} from "./logging.service";

@Injectable()
export class UserService {

  constructor(
    private loggingService: LoggingService) {
  }

  getUsers() {
    let userList:User[];
    userList=[
      new User(1, 'Azamat', 20),
      new User(2, 'Nursultan', 50),
      new User(3, 'Kaka', 22)
    ];

    this.loggingService.log('List of users: ' + userList);

    return userList;
  }
}
