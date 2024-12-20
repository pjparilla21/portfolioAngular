import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  imports: [],
  template:`<section class="bg-gradient-to-r from-gray-50 via-blue-50 to-gray-100 text-gray-800 py-16">
  <div class="container mx-auto px-6 md:px-12 lg:px-20">
    <h1 class="text-4xl md:text-5xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
      Contact
    </h1>
    <p class="text-center text-gray-600 mb-12 text-lg">
      We’d love to hear from you! Fill out the form below or reach out directly.
    </p>

    <!-- Alert Messages -->
    <div id="alert-container" class="hidden max-w-3xl mx-auto mb-6"></div>

    <div class="max-w-3xl mx-auto bg-white rounded-lg shadow-xl p-8">
      <div class="flex justify-center mb-6">
        <span class="material-icons text-blue-600 text-6xl">
          mail_outline
        </span>
      </div>

      <!-- Contact Form -->
      <form id="my-form" action="https://formspree.io/f/mzzbnero" method="POST">
        <!-- Email -->
        <div class="mb-6">
          <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your email"
            required
          />
        </div>

        <!-- Message -->
        <div class="mb-6">
          <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your message"
            required
          ></textarea>
        </div>

        <!-- Submit Button -->
        <div class="text-center">
          <button
            type="submit"
            id="my-form-button"
            class="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  </div>
</section>`,
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
  form: HTMLFormElement | null = document.getElementById("my-form") as HTMLFormElement;
  alertContainer: HTMLElement | null = document.getElementById("alert-container");

  async handleSubmit(event: Event) {
    event.preventDefault();
    const data = new FormData(event.target as HTMLFormElement);

    fetch((event.target as HTMLFormElement).action, {
      method: this.form?.method,
      body: data,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          this.showAlert("Thanks for your submission!", "success");
          this.form?.reset();
        } else {
          response.json().then((data) => {
            if (data.errors) {
              this.showAlert(
                data.errors.map((error: any) => error.message).join(", "),
                "error"
              );
            } else {
              this.showAlert("Oops! There was a problem submitting your form.", "error");
            }
          });
        }
      })
      .catch(() => {
        this.showAlert("Oops! There was a problem submitting your form.", "error");
      });
  }

  showAlert(message: string, type: string) {
    const alertType =
      type === "success"
        ? "bg-green-100 text-green-800 border-green-400"
        : "bg-red-100 text-red-800 border-red-400";

    if (this.alertContainer) {
      this.alertContainer.innerHTML = `
        <div class="p-4 border ${alertType} rounded-lg">
          <p>${message}</p>
        </div>
      `;
      this.alertContainer.classList.remove("hidden");

      setTimeout(() => {
        this.alertContainer?.classList.add("hidden");
        this.alertContainer!.innerHTML = "";
      }, 5000);
    }
  }

  ngOnInit() {
    this.form?.addEventListener("submit", this.handleSubmit.bind(this));
  }
}
