import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute } from '@angular/router';
import { IGroup } from 'src/app/services/model.service';

@Component({
  selector: 'group-details',
  templateUrl: './group_details.component.html',
  styleUrls: ['./group_details.component.scss'],
})
export class GroupDetailsComponent implements OnInit {
  group!: IGroup;

  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.group = this.apiService.getGroupDetails(
      this.route.snapshot.paramMap.get('id')!
    );
  }
}
