import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  imports: [],
  template: `<section class="bg-gradient-to-r from-gray-50 via-blue-50 to-gray-50 text-gray-800 py-16">
  <div class="container mx-auto px-6 md:px-12 lg:px-20">
    <h1 class="text-4xl md:text-5xl font-extrabold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
      About
    </h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <!-- Icon Section -->
      <div class="flex justify-center">
        <span class="material-icons text-blue-600 text-9xl">
          groups
        </span>
      </div>

      <!-- Text Section -->
      <div>
        <h2 class="text-3xl font-semibold mb-4 text-gray-800">
          Who We Are
        </h2>
        <p class="text-gray-600 text-lg leading-relaxed mb-8">
          We are a team of dedicated professionals committed to delivering excellence. Our portfolio showcases a wide range of skills, creativity, and innovative solutions tailored to meet your needs.
        </p>
        <h2 class="text-3xl font-semibold mb-4 text-gray-800">
          Our Mission
        </h2>
        <p class="text-gray-600 text-lg leading-relaxed">
          Our mission is to empower individuals and businesses through top-notch services, ensuring quality and reliability in every project we undertake.
        </p>
      </div>
    </div>
  </div>
  </section>
`,
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {

}
