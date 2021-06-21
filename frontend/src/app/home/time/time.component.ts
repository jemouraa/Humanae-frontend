import { Component, OnInit } from '@angular/core';
import { faGithub, faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  faGithubSquare = faGithubSquare;
  faLinkedin = faLinkedin;
}
