import { Address } from "./address.interface";
import { Company } from "./company.interface";

export interface Project {
  id:       number;
  name:     string;
  username: string;
  email:    string;
  address:  Address;
  phone:    string;
  website:  string;
  company:  Company;
}


