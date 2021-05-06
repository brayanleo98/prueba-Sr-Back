import { Component, OnInit } from '@angular/core';
import { NbDialogRef, NbDialogService } from '@nebular/theme';
import { ComunicationService } from 'src/app/services/comunication.service';

@Component({
  selector: 'app-dialog-edit',
  templateUrl: './dialog-edit.component.html',
  styleUrls: ['./dialog-edit.component.css']
})
export class DialogEditComponent implements OnInit {


  public userData = {
    address: null,
    dependents: null,
    area: null
  }

  constructor(private comunication: ComunicationService,
    private dialog: NbDialogRef<any>) {
      
  }

  ngOnInit(): void {
  }

  save() {
    this.comunication.setData(this.userData);
    this.dialog.close();
  }
}
