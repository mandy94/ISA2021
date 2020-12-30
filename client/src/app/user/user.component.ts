import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddAlergenComponent } from './dialogs/add-alergen/add-alergen.component';
import { EditUsersInfoComponent } from './dialogs/edit-users-info/edit-users-info.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  sortOptions = ['Ceni - rastucoj', ' Ceni - opadajucoj', 'Nazivu - rastucem', 'Nazivu - opadajucem', 'Gradu', 'Oceni']; // itd...
  user = {
    basicInfo: {
      name: 'Petar',
      surname: 'Petrovic',
      JMBG: 745103741223,
      birthdate: '10-03-1980',
      email: 'pera@gmail.com'
    },
    alergies: [{ id: 1, name: 'Soja' }],
    loyalty: {
      points: 23,
      category: 'Silver',
      availableDiscounts: 'Neke sa strane'
    }
  }
  pharmacyList = [{ name: 'Medicine Alcove' }, { name: 'Therapy Signs' }, { name: 'Therapy Aloe' }, { name: 'Medicinecy' }, { name: 'Choice Medication' }, { name: 'We Medication' }, { name: 'Pharmacyous' }, { name: 'Medical All' }, { name: 'Medicine Hop' }];
  ngOnInit() {
  }

}
