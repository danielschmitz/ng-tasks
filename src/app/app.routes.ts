import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdressFormComponent } from './adress-form/adress-form.component';
import { TableComponent } from './table/table.component';
import { TreeComponent } from './tree/tree.component';
import { SystemVariables } from './system-variables';

export const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
    },
    {
        path: 'address-form',
        component: AdressFormComponent,
    },
    {
        path: 'system-variables',
        component: SystemVariables,
    },
    {
        path: 'table',
        component: TableComponent,
    },
    {
        path: 'tree',
        component: TreeComponent,
    },

];
