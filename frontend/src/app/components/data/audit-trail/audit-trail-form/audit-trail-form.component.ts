import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AuditTrail } from '../../../../model/data/audit-trail.model';
import { CrudService } from '../../../../services/crud.service';
import { populateFormControl } from '../../../../utils/object.util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-audit-trail-form',
  templateUrl: './audit-trail-form.component.html',
  styleUrls: ['./audit-trail-form.component.scss']
})
export class AuditTrailFormComponent implements OnInit {
  audittrailForm!: FormGroup;
  controls: any = {
    "timestamp": new FormControl('', []),
    "actionEventType": new FormControl('', []),
    "userSystem": new FormControl('', []),
    "affectedEntity": new FormControl('', []),
    "iPAddress": new FormControl('', []),
    "userAgent": new FormControl('', []),
    "statusOutcome": new FormControl('', []),
    "additionalMetadata": new FormControl('', [])

  };
  submitted = false;
  endPoint = "audittrail";
  data: any = {}

  constructor(private formBuilder: FormBuilder, private service: CrudService,private router: Router) { }

  ngOnInit() {
    this.createForm();
    this.data = this.service.data;
    if (this.data.id) {
      populateFormControl(this.audittrailForm.controls, this.data);
    }
  }

  createForm() {
    this.audittrailForm = this.formBuilder.group(this.controls);
  }

  submitForm() {
    this.submitted = true;
    if (this.audittrailForm.invalid) {
      return;
    }
    const audittrailData: AuditTrail = { ...this.audittrailForm.value };
    this.service.save(audittrailData, this.endPoint).subscribe(response => {
      this.audittrailForm.reset();
      this.submitted = false;
      this.router.navigate(['audittrail-list']);
    });
  }
}

