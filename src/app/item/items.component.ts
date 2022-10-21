import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import { Item } from '../core/model/item';
import { ItemService } from '../core/service/item.service';

@Component({
  selector: 'jcb-items',
  templateUrl: './items.component.html',
})
export class ItemsComponent implements OnInit {
  items: Array<Item>

  constructor(private itemService: ItemService, private _changeDetectionRef: ChangeDetectorRef) { }

  ngOnInit(): void { }

}
