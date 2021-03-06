import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatCardModule, MatListModule, MatIconModule, MatFormFieldModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GlobalNavbarComponent } from './global-navbar/global-navbar.component';
import { GlobalNavbarElementsComponent } from './global-navbar/global-navbar-elements/global-navbar-elements.component';
import { AppRoutingModule } from './/app-routing.module';
import { SplashComponent } from './splash/splash.component';
import { CoreComponent } from './core/core.component';
import { SplashNavigateComponent } from './splash/splash-navigate/splash-navigate.component';
import { ChatComponent } from './core/chat/chat.component';
import { SocketIoService } from './socket-io/socket-io.service';
import { FormsModule } from '@angular/forms';
import { ScoreBoardComponent } from './core/score-board/score-board.component';
import { BoardCoreComponent } from './core/board-core/board-core.component';
import { GameBoardComponent } from './core/game-board/game-board.component';
import { DisplayService } from './core/display-service/display-service.service';
import { SimpleModalComponent } from './common/simple-modal/simple-modal.component';
import { LobbyComponent } from './core/lobby/lobby.component';
import {CoreCanActivate} from './core/core-route-activator.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BoardService } from './core/board.service';
import { ConfigService } from './common/services/config.service';

declare let $: any;

export function initializeApp(appConfig: ConfigService) {
  return () => appConfig.load();
}
@NgModule({
  declarations: [
    AppComponent,
    GlobalNavbarComponent,
    GlobalNavbarElementsComponent,
    SplashComponent,
    CoreComponent,
    SplashNavigateComponent,
    ChatComponent,
    ScoreBoardComponent,
    BoardCoreComponent,
    GameBoardComponent,
    SimpleModalComponent,
    LobbyComponent
  ],
  imports: [
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,
    NgbModule.forRoot(),
    HttpClientModule
  ],
  providers: [
    SocketIoService,
    DisplayService,
    CoreCanActivate,
    BoardService,
    ConfigService,
    { provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [ConfigService], multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
