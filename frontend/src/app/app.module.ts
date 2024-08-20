import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { RoleFormComponent } from './components/auth/role/role-form/role-form.component';
import { RoleListComponent } from './components/auth/role/role-list/role-list.component';
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
import { CustomerFormComponent } from './components/config/customer/customer-form/customer-form.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatRadioModule} from '@angular/material/radio';
import { NgxMatFileInputModule } from '@angular-material-components/file-input';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './admin-panel/dashboard/dashboard.component';
import { SidenavComponent } from './admin-panel/sidenav/sidenav.component';
import { HeaderComponent } from './admin-panel/header/header.component';
import { HomeComponent } from './admin-panel/home/home.component';
import {MatTreeModule} from '@angular/material/tree';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DepartmentsFormComponent } from './components/config/departments/departments-form/departments-form.component';
import { DepartmentsListComponent } from './components/config/departments/departments-list/departments-list.component';
import {MatCardModule} from '@angular/material/card';
import { SidemenuComponent } from './admin-panel/sidemenu/sidemenu.component';
import { PermissionFormComponent } from './components/auth/permission/permission-form/permission-form.component';
import { PermissionListComponent } from './components/auth/permission/permission-list/permission-list.component';
import { NgChartsModule } from 'ng2-charts';
import { NgxBootstrapMultiselectModule } from 'ngx-bootstrap-multiselect';
import { LoginComponent } from './components/login/login.component';
import { RouterModule } from '@angular/router';
import { InvoiceComponent } from './components/data/invoice/invoice.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import{MatCheckboxModule} from '@angular/material/checkbox'






@NgModule({
  declarations: [
    AppComponent,
    RoleFormComponent,
    RoleListComponent,
    CustomerListComponent,
    CustomerFormComponent,
    EmployeeFormComponent,
    EmployeeListComponent,
    ProductFormComponent,
    ProductListComponent,
    SupplierFormComponent,
    SupplierListComponent,
    TeamFormComponent,
    TeamListComponent,
    AuditTrailFormComponent,
    AuditTrailListComponent,
    OrderFormComponent,
    OrderListComponent,
    PurchaseFormComponent,
    PurchaseListComponent,
    DashboardComponent,
    SidenavComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    DepartmentsFormComponent,
    DepartmentsListComponent,
    SidemenuComponent,
    PermissionFormComponent,
    PermissionListComponent,
    LoginComponent,
    InvoiceComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatDividerModule,
    MatListModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatGridListModule,
    MatRadioModule,
    NgxMatFileInputModule,
    NgbModule,
    MatTreeModule,
    MatCardModule,
    NgChartsModule,
    NgxBootstrapMultiselectModule,
    RouterModule,
    MatSnackBarModule,
   MatCheckboxModule,
   RouterModule


  ],
  providers: [provideAnimations()],
  bootstrap: [AppComponent]
})
export class AppModule { }
