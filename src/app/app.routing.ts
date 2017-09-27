import { RouterModule } from "@angular/router"
import { ModuleWithProviders } from "@angular/core"


// Import components below
import { HomeComponent } from "./route/home/home.component"

export const APP_ROUTING: ModuleWithProviders = RouterModule.forRoot([
    {
        path: '',
        component: HomeComponent
    }
])