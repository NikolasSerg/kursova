import { Component, OnInit } from '@angular/core';
import { FieldInput } from '../../../services/dymanicFormInterface';
import { PcInterface } from '../../../services/pc-interface';
import { DataService } from '../../../services/data.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-pc-detail',
  templateUrl: './pc-detail.component.html',
  styleUrls: ['./pc-detail.component.css']
})
export class PcDetailComponent implements OnInit {
  pc: PcInterface;
  pcDefinitionInput: Array<FieldInput> = [
    {
      key: 'id',
      type: 'number',
      isId: true,
      label: 'Id',
      required: true
    },
    {
      key: 'name',
      type: 'string',
      isId: false,
      label: 'NAME',
      required: true
    },
    {
      key: 'model',
      type: 'string',
      isId: false,
      label: 'MODEL',
      required: true
    },
    {
      key: 'price',
      type: 'number',
      isId: false,
      label: 'PRICES',
      required: true
    }
  ];
  operation: string;
  errorMessage: string;

  constructor(private router: Router, 
              private route: ActivatedRoute,
              private dataService: DataService ) { }

  ngOnInit() {
    this.operation = this.route.snapshot.params['operation'];
    if (this.operation === 'create') {
      this.pc = {id: 0, name: '', model: '', price: null};
    } else {
      this.dataService
          .getPcItem(+this.route.snapshot.params['id'])
          .subscribe((pc: PcInterface) => this.pc = pc)
    }
  }

  createPc(pc: PcInterface) {
    pc.id = 0;
    this.errorMessage = null;
    this.dataService.createPc(pc).subscribe(
      c => this.router.navigate(['/authenticated/pc-maint']),
      error => this.errorMessage = 'Error creating car'
    );
  }
  updateCar(pc: PcInterface) {
    this.errorMessage = null;
    this.dataService.updatePc(pc).subscribe(
      c => this.router.navigate(['/authenticated/pc-maint']),
      error => this.errorMessage = 'Error updating car'
    );
  }

}
