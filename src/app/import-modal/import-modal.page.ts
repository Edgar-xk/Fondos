import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-import-modal',
  templateUrl: './import-modal.page.html',
  styleUrls: ['./import-modal.page.scss'],
})
export class ImportModalPage implements OnInit {
  data: string;
  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }


  dismissModal1() {

    let variables = [{
      "fecha": "3/2/2021",
      "deposito": 2000,
      "NoDisponible": 2000,
      "gastos": [
        {
          "concepto": "otro",
          "monto": 0
        }
      ],
      "saldo": 0
    },
    {
      "fecha": "3/2/2021",
      "deposito": 2500,
      "NoDisponible": 1000,
      "gastos": [
        {
          "concepto": "Mamilu",
          "monto": 750
        },
        {
          "concepto": "gasolina",
          "monto": 400
        }
      ],
      "saldo": 0
    },
    {
      "fecha": "1/3/2021",
      "deposito": 1600,
      "NoDisponible": 0,
      "gastos": [
        {
          "concepto": "gas y camisa",
          "monto": 600
        }
      ],
      "saldo": 0
    },
    {
      "fecha": "5/3/2021",
      "deposito": 2500,
      "NoDisponible": 1000,
      "gastos": [
        {
          "concepto": "lavada y paletas",
          "monto": 150
        },
        {
          "concepto": "Otros",
          "monto": 150
        },
        {
          "concepto": "saldo",
          "monto": 100
        },
        {
          "concepto": "gasolina",
          "monto": 350
        },
        {
          "concepto": "mamilu",
          "monto": 700
        }
      ],
      "saldo": 0
    },
    {
      "fecha": "5/3/2021",
      "deposito": 2600,
      "NoDisponible": 1000,
      "gastos": [
        {
          "concepto": "Mega",
          "monto": 150
        },
        {
          "concepto": "AhorroEspecial",
          "monto": 1500
        },
        {
          "concepto": "desconocido ",
          "monto": 50
        },
        {
          "concepto": "adaptador de red ",
          "monto": 270
        },
        {
          "concepto": "gasolina",
          "monto": 310
        },
        {
          "concepto": "otros",
          "monto": 110
        }
      ],
      "saldo": 0
    },
    {
      "fecha": "5/3/2021",
      "deposito": 2500,
      "NoDisponible": 1000,
      "gastos": [
        {
          "concepto": "AhorroEspecial",
          "monto": 500
        },
        {
          "concepto": "vestido",
          "monto": 500
        },
        {
          "concepto": "saldo",
          "monto": 100
        },
        {
          "concepto": "gasolina",
          "monto": 250
        },
        {
          "concepto": "paletas",
          "monto": 60
        },
        {
          "concepto": "flores y raspado",
          "monto": 250
        }
      ],
      "saldo": 0
    },
    {
      "fecha": "5/3/2021",
      "deposito": 2500,
      "NoDisponible": 1000,
      "gastos": [
        {
          "concepto": "mamilu",
          "monto": 600
        },
        {
          "concepto": "lavad ",
          "monto": 50
        },
        {
          "concepto": "mop y refresco",
          "monto": 200
        },
        {
          "concepto": "gasolina",
          "monto": 350
        },
        {
          "concepto": "regalo",
          "monto": 399
        }
      ],
      "saldo": 0
    },
    {
      "fecha": "5/4/2021",
      "deposito": 2500,
      "NoDisponible": 1000,
      "gastos": [
        {
          "concepto": "otro",
          "monto": 1
        },
        {
          "concepto": "Gatorade",
          "monto": 25
        },
        {
          "concepto": "depósito a tarjeta",
          "monto": 175
        },
        {
          "concepto": "cargador",
          "monto": 250
        },
        {
          "concepto": "rifa",
          "monto": 200
        },
        {
          "concepto": "nieve",
          "monto": 145
        }
      ],
      "saldo": 0
    },
    {
      "fecha": "5/4/2021",
      "deposito": 2500,
      "NoDisponible": 1000,
      "gastos": [
        {
          "concepto": "tarjeta",
          "monto": 200
        },
        {
          "concepto": "Mamilu",
          "monto": 700
        },
        {
          "concepto": "viaje ",
          "monto": 705
        },
        {
          "concepto": "gasolina",
          "monto": 400
        }
      ],
      "saldo": 0
    },
    {
      "fecha": "1/4/2021",
      "deposito": 2500,
      "NoDisponible": 1000,
      "gastos": [
        {
          "concepto": "estuche y cubre bocas",
          "monto": 500
        },
        {
          "concepto": "elado ",
          "monto": 50
        }
      ],
      "saldo": 0
    },
    {
      "concepto": "",
      "fecha": "5/4/2021",
      "deposito": 2500,
      "NoDisponible": 1000,
      "gastos": [
        {
          "concepto": "galletas",
          "monto": 250
        },
        {
          "concepto": "Mamilu",
          "monto": 700
        },
        {
          "concepto": "agua ",
          "monto": 30
        },
        {
          "concepto": "refresco",
          "monto": 20
        },
        {
          "concepto": "gasolina",
          "monto": 320
        },
        {
          "concepto": "panes",
          "monto": 60
        },
        {
          "fecha": "2/6/2021",
          "concepto": "limpiaparabrisas",
          "monto": 360
        },
        {
          "fecha": "2/6/2021",
          "concepto": "flores",
          "monto": 150
        }
      ],
      "saldo": 0
    },
    {
      "concepto": "Salario",
      "año": 2021,
      "mes": 6,
      "fecha": "4/6/2021",
      "deposito": 2140,
      "NoDisponible": 1000,
      "gastos": [
        {
          "fecha": "4/6/2021",
          "concepto": "pantalones",
          "monto": 240
        },
        {
          "fecha": "5/6/2021",
          "concepto": "tostitos",
          "monto": 20
        },
        {
          "fecha": "5/6/2021",
          "concepto": "refresco",
          "monto": 70
        },
        {
          "fecha": "7/6/2021",
          "concepto": "gasolina",
          "monto": 240
        },
        {
          "fecha": "8/6/2021",
          "concepto": "regalo Fabián y saldo ",
          "monto": 220
        },
        {
          "fecha": "10/6/2021",
          "concepto": "tarjeta Banorte",
          "monto": 100
        },
        {
          "fecha": "10/6/2021",
          "concepto": "Spotify",
          "monto": 115
        },
        {
          "fecha": "10/6/2021",
          "concepto": "desconocido",
          "monto": 100
        },
        {
          "fecha": "12/6/2021",
          "concepto": "regalo padre Jorge",
          "monto": 255
        }
      ],
      "saldo": 0
    },
    {
      "concepto": "Salario",
      "año": 2021,
      "mes": 6,
      "fecha": "12/6/2021",
      "deposito": 2500,
      "NoDisponible": 1000,
      "gastos": [
        {
          "fecha": "12/6/2021",
          "concepto": "mamilu",
          "monto": 700
        },
        {
          "fecha": "13/6/2021",
          "concepto": "visita padre Jorge",
          "monto": 170
        },
        {
          "fecha": "13/6/2021",
          "concepto": "regalo Leo",
          "monto": 70
        },
        {
          "fecha": "14/6/2021",
          "concepto": "gasolina",
          "monto": 400
        },
        {
          "fecha": "17/6/2021",
          "concepto": "regalo 1 de Pamela ",
          "monto": 100
        },
        {
          "fecha": "17/6/2021",
          "concepto": "nieve",
          "monto": 50
        }
      ],
      "saldo": 0
    },
    {
      "concepto": "Salario",
      "año": 2021,
      "mes": 6,
      "fecha": "18/6/2021",
      "deposito": 2500,
      "NoDisponible": 1000,
      "gastos": [
        {
          "fecha": "19/6/2021",
          "concepto": "sueter",
          "monto": 300
        },
        {
          "fecha": "19/6/2021",
          "concepto": "papaa",
          "monto": 50
        },
        {
          "fecha": "21/6/2021",
          "concepto": "Pamela",
          "monto": 200
        },
        {
          "fecha": "22/6/2021",
          "concepto": "gasolina",
          "monto": 410
        }
      ],
      "saldo": 0
    },
    {
      "concepto": "Salario",
      "año": 2021,
      "mes": 6,
      "fecha": "25/6/2021",
      "deposito": 2500,
      "NoDisponible": 1023,
      "gastos": [
        {
          "fecha": "25/6/2021",
          "concepto": "mamilu",
          "monto": 700
        },
        {
          "fecha": "26/6/2021",
          "concepto": "saldo",
          "monto": 150
        },
        {
          "fecha": "26/6/2021",
          "concepto": "juego",
          "monto": 28
        },
        {
          "fecha": "27/6/2021",
          "concepto": "regalo mamilu",
          "monto": 250
        },
        {
          "fecha": "29/6/2021",
          "concepto": "gasolina",
          "monto": 366
        },
        {
          "fecha": "29/6/2021",
          "concepto": "flores",
          "monto": 150
        },
        {
          "fecha": "29/6/2021",
          "concepto": "cena ",
          "monto": 130
        }
      ],
      "saldo": 913
    }

    ];


   // console.log(this.data);


    this.modalController.dismiss({
      'dismissed': true,
      'data': JSON.parse(this.data),
      'cerrar': true
    });
  }
}
