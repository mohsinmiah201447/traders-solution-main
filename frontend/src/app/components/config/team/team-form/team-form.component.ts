import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Team } from '../../../../model/config/team.model';
import { CrudService } from '../../../../services/crud.service';
import { populateFormControl } from '../../../../utils/object.util';
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/config/employee.model';

@Component({
  selector: 'app-team-form',
  templateUrl: './team-form.component.html',
  styleUrls: ['./team-form.component.scss']
})
export class TeamFormComponent implements OnInit {
  teamForm!: FormGroup;
  controls: any = {
    "name": new FormControl('', []),
    "leader": new FormControl('', []),
    "members": new FormControl('', []),

  };
  submitted = false;
  endPoint = "team";
  data: any = {}

  constructor(private formBuilder: FormBuilder, private service: CrudService,private router: Router) { }

  ngOnInit() {
    this.createForm();
    this.data = this.service.data;
    if (this.data.id) {
      populateFormControl(this.teamForm.controls, this.data);
    }
  }

  createForm() {
    this.teamForm = this.formBuilder.group(this.controls);
  }

  submitForm() {
    this.submitted = true;
    if (this.teamForm.invalid) {
      return;
    }

    const leader: Employee = { id:Number(this.teamForm.value.leader) };
    const members: Employee[] = [{ id:Number(this.teamForm.value.members ) }];
    const teamData: Team = { ...this.teamForm.value,leader:leader,members:members };

    this.service.save(teamData, this.endPoint).subscribe(response => {
      this.teamForm.reset();
      this.submitted = false;
      this.router.navigate(['team-list']);
    });
  }
}
