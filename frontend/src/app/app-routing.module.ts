import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { RoleFormComponent } from './components/auth/role/role-form/role-form.component';
import { RoleListComponent } from './components/auth/role/role-list/role-list.component';
import { CustomerFormComponent } from './components/config/customer/customer-form/customer-form.component';
import { CustomerListComponent } from './components/config/customer/customer-list/customer-list.component';
import { EmployeeFormComponent } from './components/config/employee/employee-form/employee-form.component';
import { EmployeeListComponent } from './components/config/employee/employee-list/employee-list.component';
import { ProductFormComponent } from './components/config/product/product-form/product-form.component';
import { ProductListComponent } from './components/config/product/product-list/product-list.component';
import { SupplierFormComponent } from './components/config/supplier/supplier-form/supplier-form.component';
import { SupplierListComponent } from './components/config/supplier/supplier-list/supplier-list.component';
import { TeamFormComponent } from './components/config/team/team-form/team-form.component';
import { TeamListComponent } from './components/config/team/team-list/team-list.component';
import { AuditTrailFormComponent } from './components/data/audit-trail/audit-trail-form/audit-trail-form.component';
import { AuditTrailListComponent } from './components/data/audit-trail/audit-trail-list/audit-trail-list.component';
import { OrderFormComponent } from './components/data/order/order-form/order-form.component';
import { OrderListComponent } from './components/data/order/order-list/order-list.component';
import { PurchaseFormComponent } from './components/data/purchase/purchase-form/purchase-form.component';
import { PurchaseListComponent } from './components/data/purchase/purchase-list/purchase-list.component';
import { DashboardComponent } from './admin-panel/dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DepartmentsFormComponent } from './components/config/departments/departments-form/departments-form.component';
import { DepartmentsListComponent } from './components/config/departments/departments-list/departments-list.component';
import { SidemenuComponent } from './admin-panel/sidemenu/sidemenu.component';
import { PermissionFormComponent } from './components/auth/permission/permission-form/permission-form.component';
import { PermissionListComponent } from './components/auth/permission/permission-list/permission-list.component';
import { LoginComponent } from './components/login/login.component';
import { InvoiceComponent } from './components/data/invoice/invoice.component';
const routes: Routes = [

      {path: '', component: LoginComponent}, 

     {path:'dashboard', component: SidemenuComponent,
    children: [ 
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'role-form', component: RoleFormComponent },
      { path: 'role-list', component: RoleListComponent },
      { path: 'permission-form', component: PermissionFormComponent },
      { path: 'permission-list', component: PermissionListComponent },
      { path: 'customer-form', component: CustomerFormComponent },
      { path: 'customer-list', component: CustomerListComponent },
      { path: 'employee-form', component: EmployeeFormComponent },
      { path: 'employee-list', component: EmployeeListComponent },
      { path: 'product-form', component: ProductFormComponent },
      { path: 'product-list', component: ProductListComponent },
      { path: 'supplier-form', component: SupplierFormComponent },
      { path: 'supplier-list', component: SupplierListComponent },
      { path: 'team-form', component: TeamFormComponent },
      { path: 'team-list', component: TeamListComponent },
      { path: 'audittrail-form', component: AuditTrailFormComponent },
      { path: 'audittrail-list', component: AuditTrailListComponent },
      { path: 'order-form', component: OrderFormComponent },
      { path: 'order-list', component: OrderListComponent },
      { path: 'purchase-form', component: PurchaseFormComponent },
      { path: 'purchase-list', component: PurchaseListComponent },
      { path: 'departments-form', component: DepartmentsFormComponent },
      { path: 'departments-list', component: DepartmentsListComponent },
      { path: 'invoice', component: InvoiceComponent },
      {path: '', redirectTo: '', pathMatch: 'full'}
    ]
  },
  
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
