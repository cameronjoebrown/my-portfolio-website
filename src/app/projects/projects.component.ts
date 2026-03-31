import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {
  openSourceProjects = [
    {
      title: 'Portfolio Website',
      description: 'The code for this portfolio website, built with Angular and Bootstrap. It is deployed using Vercel.',
      technologies: ['Angular', 'Bootstrap', 'TypeScript', 'Vercel', 'bun', 'Vitest'],
      gitHubUrl: 'https://github.com/cameronjoebrown/my-portfolio-website',
      liveUrl: 'https://cameronjoebrown.com'
    },
    {
      title: 'Iron Blossom Web Scraper',
      description: 'A web scraper of the Iron Blossom Lodge Timeshares for Sale website that sends an email when a new Timeshare unit is posted for sale.',
      technologies: ['Python', 'BeautifulSoup'],
      gitHubUrl: 'https://github.com/cameronjoebrown/ironblossom-web-scraper',
    }
  ];

  workProjects = [
    {
      title: 'Digital Automation Platform UI',
      description: "A web-based UI for managing and visualizing BPMN workflows in Camunda 7.",
      technologies: ['Angular', 'Cypress', 'Playwright', 'Kubernetes', 'AWS', 'TypeScript'],
      company: 'Fidelity Investments',
      year: '2022-2024'
    },
    {
      title: 'Enterprise Task Management API',
      description: 'A REST API that provides additional capabilities on top of the existing task resources in the Camunda 7 platform.',
      technologies: ['Node.js', 'NestJS', 'Kubernetes', 'PostgreSQL', 'Camunda 7', 'AWS', 'TypeScript'],
      company: 'Fidelity Investments',
      year: '2024-Present'
    }
  ]

  ngOnInit(): void {
      
  }
}
