import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Awesomes} from '../awesomes';
import {AwesomesService} from '../awesomes.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-awesomes',
  templateUrl: './awesomes.component.html',
  styleUrls: ['./awesomes.component.scss']
})
export class AwesomesComponent implements OnInit {
  @Input() awesomes: Awesomes;
  @Output() deleted = new EventEmitter();
  awesomesList: Awesomes[];


  constructor(private httpClient: HttpClient,
              private awesomesService: AwesomesService,
              private router: Router
  ) {
  }

  ngOnInit() {
    this.reLoad();
  }

  reLoad() {
    this.awesomesService.getList().subscribe(result => {
      this.awesomesList = result;
    });
  }

  refreshAwesomes() {
    this.awesomesList = this.awesomesService.getCurrentAwesomeList();
  }

  deleteAwesome(item: Awesomes) {
    if (confirm('Are you sure')) {
      this.awesomesService.deleteAwesomes(item);
      this.refreshAwesomes();
    }
  }
}
