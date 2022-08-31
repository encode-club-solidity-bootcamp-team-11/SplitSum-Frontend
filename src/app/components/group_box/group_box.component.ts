import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { IGroup } from 'src/app/services/model.service';

@Component({
  selector: 'group-box',
  templateUrl: './group_box.component.html',
  styleUrls: ['./group_box.component.scss'],
})
export class GroupBoxComponent implements OnInit {
  @Input() group!: IGroup;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {}
}
