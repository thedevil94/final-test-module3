import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Awesomes} from '../awesomes';
import {AwesomesService} from '../awesomes.service';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {DataTransferService} from '../data-transfer.service';

@Component({
  selector: 'app-awesomes-list',
  templateUrl: './awesomes-list.component.html',
  styleUrls: ['./awesomes-list.component.scss']
})
export class AwesomesListComponent implements OnInit {
  @Input() awesomes: Awesomes;
  @Output() deleted = new EventEmitter();
  awesomesList: Awesomes[];


  constructor(private httpClient: HttpClient,
              private awesomesService: AwesomesService,
              private router: Router,
              private transferService: DataTransferService
  ) {
  }

  ngOnInit() {
    // this.reLoad();
    if (this.awesomesService.getCurrentAwesomeList() !== undefined) {
      this.refreshAwesomes();
    } else {
      this.awesomesService.getList().subscribe(data => {
        this.awesomesService.setAwesomes(data);
        this.refreshAwesomes();
      });
    }
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
  goToEditBlog(item: Awesomes) {
    this.transferService.setData(item);
    this.router.navigateByUrl('/edit-awesome');
  }

}
