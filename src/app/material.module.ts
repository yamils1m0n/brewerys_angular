import { NgModule } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule}  from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule}  from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';

@NgModule({
    imports: [
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatSelectModule,
        MatCardModule
    ],
    exports: [
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatSelectModule,
        MatCardModule
    ],
})

export class MaterialModule { }
