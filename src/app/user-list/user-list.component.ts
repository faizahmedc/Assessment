import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CommonService } from '../services/core/common.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  userList: Array<any>;

  constructor(
    private commonService: CommonService,
    private route: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.commonService.listusers().subscribe((res: Array<any>) => {
      this.userList = res;
      console.log(res);
    });

  }

  showPost(user) {
    user.isPost = true;
    this.commonService.listuserPost(user.id).subscribe((res: Array<any>) => {
      user.postList = res;
      console.log(res);
    });
  }

  hidePost(user) {
    user.isPost = false;
  }

}
