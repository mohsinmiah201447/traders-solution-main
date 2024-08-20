import { Component } from '@angular/core';
import { MatDrawerMode } from '@angular/material/sidenav';



interface SidenavConfig {
  shouldRun: boolean | null;
  hasBackdrop: boolean | null;
  mode: MatDrawerMode;
  position: 'start' | 'end';
  isOpened: boolean;
}

interface Menu {
  title: string;
  link?: string;
  submenu?: Menu[];
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent {
  config: SidenavConfig = {
    shouldRun: true,
    hasBackdrop: false,
    mode: 'side',
    position: 'start',
    isOpened: true,
  }

  menues: Menu[] = [
    {
      title: "Auth",
      submenu: [
        {
          title: "Permission",
          submenu: [
            {
              title: 'Form',
              link: 'permission-form'
            },
            {
              title: 'List',
              link: 'permission-list'
            }
          ]
        },
        {
          title: "User",
          submenu: [
            {
              title: 'Form',
              link: 'user-form'
            },
            {
              title: 'List',
              link: 'user-list'
            }
          ]
        },
        {
          title: "Role",
          submenu: [
            {
              title: 'Form',
              link: 'role-form'
            },
            {
              title: 'List',
              link: 'role-list'
            }
          ]
        },
      ]
    },


    {
      title: "Project Configuration",
      submenu: [
        {
          title: "Customer",
          submenu: [
            {
              title: 'Form',
              link: 'customer-form'
            },
            {
              title: 'List',
              link: 'customer-list'
            }
          ]
        }
      ]
    },
    {
      title: "Project Data",
      submenu: [
        {
          title: "Audittrail",
          submenu: [
            {
              title: 'Form',
              link: 'audittrail-form'
            },
            {
              title: 'List',
              link: 'audittrail-list'
            }
          ]
        },
        
      ]
    },

  ]
}

