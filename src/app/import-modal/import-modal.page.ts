import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-import-modal',
  templateUrl: './import-modal.page.html',
  styleUrls: ['./import-modal.page.scss'],
})
export class ImportModalPage implements OnInit {
  data:string;
  constructor(public modalController:ModalController) { }

  ngOnInit() {
  }


  dismissModal() {
    
    this.modalController.dismiss({
      'dismissed': true,
      'data': this.data,
      'cerrar': true
    });
  }
}
