import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Permission } from '../../../../model/auth/permission.model';
import { CrudService } from '../../../../services/crud.service';
import { populateFormControl } from '../../../../utils/object.util';

@Component({
  selector: 'app-permission-form',
  templateUrl: './permission-form.component.html',
  styleUrls: ['./permission-form.component.scss']
})
export class PermissionFormComponent implements OnInit {
  permissionForm!: FormGroup;
  controls: any = {
    "name": new FormControl('', []),
    "componentKey": new FormControl('', []),
    "description": new FormControl('', []),
    "category": new FormControl('', [])
  };
  submitted = false;
  endPoint = "permission";
  data: any = {}

  constructor(private formBuilder: FormBuilder, private service: CrudService,private router: Router) { }

  ngOnInit() {
    this.createForm();
    this.data = this.service.data;
    if (this.data.id) {
      populateFormControl(this.permissionForm.controls, this.data);
    }
  }

  createForm() {
    this.permissionForm = this.formBuilder.group(this.controls);
  }

  submitForm() {
    this.submitted = true;
    if (this.permissionForm.invalid) {
      return;
    }
    const permissionData: Permission = { ...this.permissionForm.value };
    this.service.save(permissionData, this.endPoint).subscribe(response => {
      this.permissionForm.reset();
      this.submitted = false;
      this.router.navigate(['/permission-list']);
    });

  }
}