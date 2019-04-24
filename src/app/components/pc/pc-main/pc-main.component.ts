import { Component, OnInit } from '@angular/core';
import { PcInterface } from '../../../services/pc-interface';
import { Router } from '@angular/router';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-pc-main',
  templateUrl: './pc-main.component.html',
  styleUrls: ['./pc-main.component.css']
})
export class PcMainComponent implements OnInit {
  PcList: Array<PcInterface>;
  deleteError: string;
  deleteId: number;
  isDeleting = false;

  constructor(private router: Router, private dataService: DataService) {
    this.dataService.getPC().subscribe((data) => {
      this.PcList = data
    })
  }

  ngOnInit() {
  }

  createPc() {
    this.router.navigate(['/authenticated/pc-detail', 0, 'create']);
  }
  showPcDetail(id: number) {
    this.router.navigate(['/authenticated/pc-detail', id, 'details']);
  }
  editPc(id: number) {
    this.router.navigate(['/authenticated/pc-detail', id, 'edit']);
  }
  deletePcQuestion(id: number) {
    this.deleteError = null;
    this.deleteId = id;
  }
  deletePc(id: number) {
    this.isDeleting = true;
    this.dataService.deletePc(id).subscribe(c => this.cancelDelete(),
      error => {
        this.deleteError = error;
        this.isDeleting = false;
      });
  }
  cancelDelete() {
    this.isDeleting = false;
    this.deleteId = null;
  }

}
