import { Component, Input } from '@angular/core';
import { Subject } from '../subject/Subject';
import { MatTableDataSource } from '@angular/material';
import { AuthenticationService } from '../authService';
import { SubService } from '../subService';
import { User } from '../User';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent {
  subjects: Subject[]
  _subscription;

  displayedColumns = ['courseNumber', 'name', 'credit', 'lectureTime', 'lectureRoom', 'professor', 'seats', 'major', 'drop'];
  dataSource = new MatTableDataSource<Subject>(this.subjects);

  constructor(private subService: SubService, private authenticationService: AuthenticationService) {}

  ngOnInit() {
    if(this.authenticationService.user) {
      this.subjects = this.authenticationService.user.subjects;
      this.dataSource = new MatTableDataSource<Subject>(this.subjects);      
    }

    this._subscription = this.authenticationService.userChange.subscribe((user: User) => {
      if (user) {
        this.subjects = user.subjects
        this.dataSource = new MatTableDataSource<Subject>(this.subjects);
      } else {
        this.dataSource = null;
      }
    });
  }

  drop(subject: Subject) {
    const { user } = this.authenticationService;

    this.subService.removeSubject(subject._id).then((result: any) => {
      const newUser = user.removeSubject(subject);
      subject.seats++;      
      this.authenticationService.change(newUser)
      window.alert('삭제되었습니다.');
    });
  }
}
