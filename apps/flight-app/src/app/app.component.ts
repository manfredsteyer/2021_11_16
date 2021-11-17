import {Component} from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { authCodeFlowConfig } from './auth.config';

@Component({
  selector: 'flight-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private oauthService: OAuthService) {
    oauthService.configure(authCodeFlowConfig);
    oauthService.loadDiscoveryDocumentAndTryLogin();
  }
}
