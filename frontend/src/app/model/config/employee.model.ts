import { User } from '../auth/user.model';
import { AuditAbleModel } from '../super-model/auditable.model';
import { Team } from './team.model';

export interface Employee extends AuditAbleModel {
  firstName?: String;
  lastName?: String;
  dateOfBirth?: Date;
  gender?: String;
  nationalId?: Number;
  email?: String;
  phone?: Number;
  address?: String;
  emergencyContactName?: String;
  emergencyContactPhone?: Number;
  hireDate?: Date;
  designation?: String;
  department?: String;
 // user?: User;
  manager?: Employee;  //employee
  employeeStatus?: String;
  salary?: Number;
  payFrequency?: Number;
  payRate?: Number;
  healthInsurance?: String;
  retirementPlans?: String;
  otherBenefits?: String;
  performanceReview?: String;
  trainingRecords?: String;
  certifications?: String;
  terminationDate?: Date;
  reasonForTermination?: String;
  team?: String //Team;
}
