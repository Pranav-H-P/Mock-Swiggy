import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  footerLinkTitles = [
      "Company",
      "Contact Us",
      "Available in:",
      "Life at Swigular",
      "Legal"
  ];
  footerLinks = [

    [
      "About Us",
      "Swigular Corporate",
      "Careers",
      "Team",
      "Swigular One",
      "Swigular Instamart",
      "Swigular Dineout",
      "Swigular Genie"
    ],
    [
      "Help & Support",
      "Partner with us",
      "Ride with us"
    ],
    [
      "Bangalore",
      "Gurgaon",
      "Hyderabad",
      "Delhi",
      "Mumbai",
      "Pune"
    ],
    [
      "Explore with Swigular",
      "Swigular News",
      "Snackables"
    ],
    [
      "Terms & Conditions",
      "Cookie Policy",
      "Privacy Policy",
      "Investor Relations"
    ]

  ];
}
