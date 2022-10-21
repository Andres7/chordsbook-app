import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'jcb-items',
  templateUrl: './detail.component.html',
})
export class DetailComponent implements OnInit {

  constructor(private _changeDetectionRef: ChangeDetectorRef) { }

  ngOnInit(): void { }

}
