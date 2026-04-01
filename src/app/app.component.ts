import { Component, HostListener } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent {
    title = 'portfolio-website';
    // Track whether the menu is open. Start collapsed so it doesn't open automatically on small screens.
    public isMenuCollapsed = true;

    @HostListener('window:scroll')
    onWindowScroll() {
        const element = document.querySelector('.navbar');
        if (window.pageYOffset > 5) {
            element.classList.remove('bg-transparent');
        } else {
            element.classList.add('bg-transparent');
        }
    }

    toggleCollapsedMenu() {
        this.isMenuCollapsed = !this.isMenuCollapsed;
        const element = document.querySelector('.navbar');
        if (!this.isMenuCollapsed) {
            element.classList.remove('bg-transparent');
        } else {
            element.classList.add('bg-transparent');
        }
    }

    closeMenu() {
        this.isMenuCollapsed = true;
        const element = document.querySelector('.navbar');
        element.classList.add('bg-transparent');
    }
}
