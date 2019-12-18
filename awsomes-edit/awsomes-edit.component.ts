import {Component, OnInit} from '@angular/core';
import {Awesomes} from '../awesomes';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AwesomesService} from '../awesomes.service';
import {Router} from '@angular/router';
import {DataTransferService} from '../data-transfer.service';

@Component({
  selector: 'app-awsomes-edit',
  templateUrl: './awsomes-edit.component.html',
  styleUrls: ['./awsomes-edit.component.scss']
})
export class AwsomesEditComponent implements OnInit {
  awesome: Awesomes;
  awesomesForm: FormGroup;

  constructor(private fb: FormBuilder,
              private awesomesService: AwesomesService,
              private router: Router,
              private dataTransferService: DataTransferService
  ) {
  }

  ngOnInit() {
    this.awesome = this.dataTransferService.getData();
    this.awesomesForm = this.fb.group({
      id: [this.awesome.id],
      tag: [this.awesome.tag],
      url: [this.awesome.url],
      descriptions: [this.awesome.descriptions]
    });
  }

  onSubmit() {
    this.awesomesService.editAwesome(this.awesomesForm.value);
    this.router.navigateByUrl('/');
  }

}
