import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Departments } from '../../../../model/config/departments.model';
import { Manager } from '../../../../model/config/manager.model';
import { DepartmentsService } from '../../../../services/config/departments.service';
import { CrudService } from '../../../../services/crud.service';
import { populateFormControl } from '../../../../utils/object.util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-departments-form',
  templateUrl: './departments-form.component.html',
  styleUrls: ['./departments-form.component.scss']
})
export class DepartmentsFormComponent implements OnInit {
  departmentsForm!: FormGroup;
  controls: any = {
    name: new FormControl('', []),
    manager: new FormControl('', []),
    location: new FormControl('', []),
  };
  submitted = false;
  endPoint = 'departments';
  data: any = {};
  managers: Manager[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private service: CrudService,
    private departmentsService: DepartmentsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.createForm();
    this.data = this.service.data;
    if (this.data.id) {
      populateFormControl(this.departmentsForm.controls, this.data);
    }
    this.departmentsService.getManagers().subscribe((res) => {
      this.managers = res.data as Manager[];
    });
  }

  createForm() {
    this.departmentsForm = this.formBuilder.group(this.controls);
  }

  submitForm() {
    this.submitted = true;
    if (this.departmentsForm.invalid) {
      return;
    }
    const manager: Departments = { id:Number(this.departmentsForm.value.manager) };
    // const manager: Departments = { id: this.controls['manager'].value };
    const departmentsData: Departments = {
      ...this.departmentsForm.value,
      manager: manager
    };
    this.service.save(departmentsData, this.endPoint).subscribe((response) => {
      this.departmentsForm.reset();
      this.submitted = false;
      this.router.navigate(['departments-list']);
    });
  }
}
