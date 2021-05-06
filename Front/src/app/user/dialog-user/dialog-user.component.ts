import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dialog-user',
  templateUrl: './dialog-user.component.html',
  styleUrls: ['./dialog-user.component.css']
})
export class DialogUserComponent implements OnInit {

  public form: FormGroup;
  @Input() data: any;
  @Output() dataResponse: EventEmitter<any> = new EventEmitter();

  public userData = [
    {
      day: 1,
      sche: '08:00 - 18:00',
    },
    {
      day: 2,
      sche: '08:00 - 18:00',
    },
    {
      day: 3,
      sche: '08:00 - 18:00',
    },
    {
      day: 4,
      sche: '08:00 - 18:00',
    },
    {
      day: 5,
      sche: '08:00 - 18:00',
    },
  ]

  constructor(private formBuilder: FormBuilder,) {



  }

  ngOnInit(): void {
    console.log(this.data);
    const aux = this.data.in.split(':');
    const auxOut = this.data.out.split(':');
    let hourIn = new Date()
    let hourOut = new Date()
    hourIn.setHours(parseFloat(aux[0]));
    hourOut.setHours(parseFloat(auxOut[0]));
    hourIn.setMinutes(parseFloat(aux[1]));
    hourOut.setMinutes(parseFloat(auxOut[1]));
    this.form = this.formBuilder.group({
      in: [hourIn],
      out: [hourOut],
    });
    

  }

  save() {
    const values = this.form.value;
    
    values.in = values.in.toTimeString().split(':')
    values.out = values.out.toTimeString().split(':')

    const ini = values.in[0] + ':' + values.in[1];
    const end = values.out[0] + ':' + values.out[1];

    // values.in = values.in.getTime() + ':' + values.in.getMinutes()
    
    console.log(values);
    this.userData[0].sche = ini + '-' + end ;
    this.userData[1].sche = ini + '-' + end ;
    this.userData[2].sche = ini + '-' + end ;
    this.userData[3].sche = ini + '-' + end ;
    this.userData[4].sche = ini + '-' + end ;
    this.dataResponse.emit({time : this.userData, in: ini, out: end });
  }
}
