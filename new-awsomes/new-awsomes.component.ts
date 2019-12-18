import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AwesomesService} from '../awesomes.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-awsomes',
  templateUrl: './new-awsomes.component.html',
  styleUrls: ['./new-awsomes.component.scss']
})
export class NewAwsomesComponent implements OnInit {
  awesomeForm: FormGroup;

  constructor(private fb: FormBuilder,
              private awesomeService: AwesomesService,
              private router: Router
  ) {
  }

  ngOnInit() {
    this.awesomeForm = this.fb.group({
      id: [''],
      tag: [''],
      url: [''],
      descriptions: ['']
    });
  }

  onSubmit() {
    this.awesomeService.addAwesome(this.awesomeForm.value);
    this.router.navigateByUrl('/');
  }

}
