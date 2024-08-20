import { Component, OnInit } from '@angular/core';
import {
  FormGroup,FormBuilder,Validators,FormControl} from '@angular/forms';
import { Role } from '../../../../model/auth/role.model';
import { CrudService } from '../../../../services/crud.service';
import { Permission } from '../../../../model/auth/permission.model';
import { Router } from '@angular/router';
import { IMultiSelectOption, IMultiSelectSettings } from 'ngx-bootstrap-multiselect';

@Component({
  selector: 'app-role-form',
  templateUrl: './role-form.component.html',
  styleUrls: ['./role-form.component.scss'],
})
export class RoleFormComponent implements OnInit {
  roleForm!: FormGroup;
  controls: any = {
    name: new FormControl('', []),
    permission: new FormControl('', []),
  };
  submitted = false;
  endPoint = 'role';
  constructor(
    private formBuilder: FormBuilder,
    private service: CrudService,
    private router: Router
  ) {}

  permissionSettings: IMultiSelectSettings = {
    enableSearch: true,
    checkedStyle: 'fontawesome',
    buttonClasses: 'btn btn-default btn-block',
    itemClasses: 'form-control',
    containerClasses: 'form-control',
    dynamicTitleMaxItems: 3,
    displayAllSelectedText: true,
  };

  permissionOptions: IMultiSelectOption[] = [];

  ngOnInit() {
    this.createForm();
    this.service.getList('permission').subscribe((res) => {
      this.permissionOptions = res?.data?.content;
    });
  }

  createForm() {
    this.roleForm = this.formBuilder.group({
      name: ['', Validators.required],
      permissions: [[], Validators.required],
    });
  }

  submitForm() {
    this.submitted = true;
    if (this.roleForm.invalid) {
      return;
    }
    const permissions: Permission[] = this.roleForm.value.permissions.map(
      (permissionId: number) => {
        return { id: permissionId };
      }
    );

    const roleData: Role = { ...this.roleForm.value, permissions: permissions };
    this.service.save(roleData, this.endPoint).subscribe((response) => {
      this.roleForm.reset();
      this.submitted = false;
      this.router.navigate(['/role-list']);
    });
  }
}
