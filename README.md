My Signup App
A modern web application built with Next.js, featuring professional signup and login pages with form validation, responsive design, and a clean user interface. The app uses TypeScript for type safety, Tailwind CSS for styling, and shadcn/ui components for a polished look. Form handling is powered by react-hook-form and zod for robust validation, with password visibility toggles using lucide-react icons.
Features

Signup Page: Allows users to register with fields for first name, last name, email, phone number, password, and confirm password. Includes real-time validation and password visibility toggles.
Login Page: Enables users to log in with email and password, featuring validation and a password visibility toggle.
Responsive Design: Optimized for mobile, tablet, and desktop using Tailwind CSS.
Professional UI: Consistent color scheme (teal #069B99, light pink #FFE7E7, gray-green #CFDBD5) with shadows and rounded corners.
Form Validation: Powered by zod for client-side validation of inputs (e.g., email format, password length, phone number format).
Accessibility: Includes ARIA attributes and semantic HTML for better screen reader support.
Navigation: Links between signup and login pages, with redirects to a dashboard on successful submission (mocked).

Tech Stack

Framework: Next.js 14 (App Router)
Language: TypeScript
Styling: Tailwind CSS
UI Components: shadcn/ui
Form Management: react-hook-form
Validation: zod
Icons: lucide-react
State Management: Optional Redux integration (for API responses)
Navigation: Next.js useRouter
Dependencies: See package.json for full list

Prerequisites
Ensure you have the following installed:

Node.js: Version 18.x or 20.x
npm: Version 10.x or later (11.3.0 recommended)
Git: For cloning the repository

Installation

Clone the repository:
git clone https://github.com/your-username/my-signup-app.git
cd my-signup-app


Install dependencies:
npm install


Verify Tailwind CSS configuration:Ensure tailwind.config.ts includes:
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: { extend: {} },
  plugins: [],
};

And src/app/globals.css contains:
@tailwind base;
@tailwind components;
@tailwind utilities;


Set up shadcn/ui (if not already initialized):
npx shadcn-ui@latest init
npx shadcn-ui@latest add form input button toast



Project Structure
my-signup-app/

├── src/

│   ├── app/

│   │   ├── page.tsx              # Login page
│   │   ├── sign_up/
│   │   │   └── page.tsx          # Signup page
│   │   └── globals.css           # Tailwind CSS styles
│   ├── components/
│   │   ├── Common/
│   │   │   └── OnboardingHeader.tsx  # Header with logo
│   │   ├── login/
│   │   │   └── login-section.tsx # Login form component
│   │   └── signup/
│   │       └── sign-up-section.tsx # Signup form component
│   ├── schema/
│   │   ├── login-schema.ts       # Zod schema for login
│   │   └── sign_up_schema.ts     # Zod schema for signup
│   ├── services/
│   │   └── signupServices.ts     # Mock signup API service
│   ├── public/
│   │   └── images/
│   │       └── Logo_Red.svg      # Logo for header
│   └── lib/
│       └── utils.ts              # Utility functions (e.g., cn)
├── tailwind.config.ts            # Tailwind configuration
├── package.json                  # Dependencies and scripts
└── README.md                     # This file

Usage

Run the development server:
npm run dev

Open http://localhost:3000 to view the login page.

Test the pages:

Login Page (/):
Enter email and password.
Toggle password visibility using the eye icon.
Submit to navigate to a success page (mocked as /Dashboard).
Click "Sign up" to navigate to /sign_up.


Signup Page (/sign_up):
Enter first name, last name, email, phone number, password, and confirm password.
Validate inputs in real-time (e.g., email format, 10-digit phone, matching passwords).
Toggle password visibility for both password fields.
Submit to navigate to a success page (mocked as /success_page).




Build for production:
npm run build
npm start


Troubleshooting

Dependencies Missing:npm install zod react-hook-form @hookform/resolvers/zod lucide-react
Tailwind CSS Not Working:Verify tailwind.config.ts and globals.css as shown in Installation.
Form Validation Errors:Check src/schema/login-schema.ts and src/schema/sign_up_schema.ts for correct Zod schemas.

