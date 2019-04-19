import { Component, OnInit } from '@angular/core';
import { PcInterface } from './../../services/pc-interface';
import { Router } from '@angular/router';
import { DataService } from './../../services/data.service';

@Component({
  selector: 'app-pc-main',
  templateUrl: './pc-main.component.html',
  styleUrls: ['./pc-main.component.css']
})
export class PcMainComponent implements OnInit {
  PcList: Array<PcInterface>;
  deleteError: string;
  deleteId: string;
  isDeleting = false;

  constructor(private router: Router, private dataService: DataService) {
    this.dataService.getPC().subscribe((data) => {
      this.PcList = data
    })
  }

  ngOnInit() {
  }

  createPC(){

  }
  showPcDetail(){}
  editPc(){}
  deletePc(){}
}
