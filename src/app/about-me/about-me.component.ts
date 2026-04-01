import { Component } from '@angular/core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

@Component({
    selector: 'app-about-me',
    templateUrl: './about-me.component.html',
    styleUrls: ['./about-me.component.css'],
    imports: [FaIconComponent]
})
export class AboutMeComponent {
    faGithub = faGithub;
    faLinkedin = faLinkedin;
}
