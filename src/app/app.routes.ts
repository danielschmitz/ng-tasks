import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./home/home.component').then(c => c.HomeComponent),
    },
    {
        path: 'login',
        loadComponent: () => import('./login/login.component').then(c => c.LoginComponent),
    },
    {
        path: 'categories',
        loadComponent: () => import('./categories/categories.component').then(c => c.CategoriesComponent),
    },
    {
        path: 'categories/new',
        loadComponent: () => import('./categories/new/new-category.component').then(c => c.NewCategoryComponent),
    },
    {
        path: 'categories/edit/:id',
        loadComponent: () => import('./categories/edit/edit-category.component').then(c => c.EditCategoryComponent),
    },
    {
        path: 'tasks',
        loadComponent: () => import('./tasks/tasks.component').then(c => c.TasksComponent),
    },
    {
        path: 'tasks/new',
        loadComponent: () => import('./tasks/new/new-task.component').then(c => c.NewTaskComponent),
    },
    {
        path: 'tasks/edit/:id',
        loadComponent: () => import('./tasks/edit/edit-task.component').then(c => c.EditTaskComponent),
    },
    {
        path: 'address-form',
        loadComponent: () => import('./adress-form/adress-form.component').then(c => c.AdressFormComponent),
    },
    {
        path: 'system-variables',
        loadComponent: () => import('./system-variables').then(c => c.SystemVariables),
    },
    {
        path: 'table',
        loadComponent: () => import('./table/table.component').then(c => c.TableComponent),
    },
    {
        path: 'tree',
        loadComponent: () => import('./tree/tree.component').then(c => c.TreeComponent),
    },
];

