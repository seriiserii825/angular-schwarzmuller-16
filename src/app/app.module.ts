import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './server/server.component';
import {FormsModule} from '@angular/forms';
import { TheBasicsComponent } from './pages/the-basics/the-basics.component';
import { HeaderComponent } from './components/header/header.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { RecipesListComponent } from './components/recipes/recipes-list/recipes-list.component';
import { RecipesDetailComponent } from './components/recipes/recipes-detail/recipes-detail.component';
import { RecipesItemComponent } from './components/recipes/recipes-list/recipes-item/recipes-item.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './components/shopping-list/shopping-edit/shopping-edit.component';
import { PageServiceComponent } from './pages/page-service/page-service.component';
import { CockpitComponent } from './pages/page-service/cockpit/cockpit.component';
import { InputComponent } from './pages/ui/input/input.component';
import { BtnComponent } from './pages/ui/btn/btn.component';
import { ServerElementComponent } from './pages/page-service/server-element/server-element.component';
import { PageGameControlComponent } from './pages/page-game-control/page-game-control.component';
import { GameControlComponent } from './pages/page-game-control/game-control/game-control.component';
import { OddComponent } from './pages/page-game-control/odd/odd.component';
import { EvenComponent } from './pages/page-game-control/even/even.component';
import { DropdownDirectiveDirective } from './directives/dropdown-directive.directive';
import { BasicHighlightDirectiveDirective } from './directives/basic-highlight-directive.directive';
import { PageAccountComponent } from './pages/page-account/page-account.component';

@NgModule({
  declarations: [
    AppComponent,
    ServersComponent,
    ServerComponent,
    TheBasicsComponent,
    HeaderComponent,
    RecipesComponent,
    RecipesListComponent,
    RecipesDetailComponent,
    RecipesItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    PageServiceComponent,
    CockpitComponent,
    InputComponent,
    BtnComponent,
    ServerElementComponent,
    PageGameControlComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    DropdownDirectiveDirective,
    BasicHighlightDirectiveDirective,
    PageAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
