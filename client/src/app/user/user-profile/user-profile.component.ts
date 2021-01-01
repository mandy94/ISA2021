import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddAlergenComponent } from 'app/user/dialogs/add-alergen/add-alergen.component';
import { EditUsersInfoComponent } from 'app/user/dialogs/edit-users-info/edit-users-info.component';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

 
  constructor(public dialog: MatDialog) { }

  editInfo(): void {
    const dialogRef = this.dialog.open(EditUsersInfoComponent, {
      width: '550px',
      data: this.user.basicInfo
    });
    dialogRef.afterClosed().subscribe(result => {  
      console.log(result);
    });
  }
  addAlergen(): void {
    const dialogRef = this.dialog.open(AddAlergenComponent, {
      width: '550px',
      data: {
        known_alergens: this.user.alergies,
        all_alegerns: [{ id: 1, name: 'Soja' }, { id: 2, name: 'Gluten' }]
      }
    });
    dialogRef.afterClosed().subscribe(result => {

    });
  }
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


  ngOnInit() {
  }

}
