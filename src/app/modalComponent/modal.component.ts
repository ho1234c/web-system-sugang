import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../authService';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  animations: [
    trigger('dialog', [
      transition('void => *', [
        style({ transform: 'scale3d(.3, .3, .3)' }),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'scale3d(.0, .0, .0)' }))
      ])
    ])
  ]
})
export class ModalComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router, private authenticationService: AuthenticationService) {}

  @Input() closable = true;
  @Input() visible: boolean;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  error: string;
  id: string;
  pw: string;
  email: string;

  ngOnInit() { }

  login() {
    this.authenticationService.login(this.id, this.pw).then((user) => {
      this.close();
      console.log('login success');
    }).catch(error => {
      this.error = error;
    })
  }

  close() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }
}
