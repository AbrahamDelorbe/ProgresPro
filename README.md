# ProgresPro
Software-product tracking system 


# Server commands
- `npm run dev` - runs nodemon + server which watches the .ts files (basically start the server).

# Frontend is using atomic design pattern

my-react-app/
│
├── public/
│   ├── index.html
│
├── src/
│   ├── assets/                  # Static assets like images, fonts, etc.
│   ├── components/              # Atoms, Molecules, Organisms
│   │   ├── atoms/               # Basic building blocks (e.g., Button, Input)
│   │   │   ├── Button.tsx
│   │   │   ├── Input.tsx
│   │   │   └── ...              # Other atomic components
│   │   ├── molecules/           # Combinations of atoms (e.g., FormGroup)
│   │   │   ├── FormGroup.tsx
│   │   │   └── ...              # Other molecular components
│   │   ├── organisms/           # Complex components made of atoms and molecules (e.g., Header, Footer)
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── ...              # Other organism components
│   │   ├── templates/           # Page templates (e.g., HomePageTemplate)
│   │   │   ├── HomePageTemplate.tsx
│   │   │   └── ...              # Other templates
│   │   ├── pages/               # Pages composed using templates and organisms (e.g., HomePage)
│   │   │   ├── HomePage.tsx
│   │   │   └── ...              # Other pages
│   ├── hooks/                   # Custom hooks
│   ├── context/                 # Context providers for state management
│   ├── services/                # API calls and services
│   ├── utils/                   # Utility functions and helpers
│   ├── App.tsx                  # Main app component
│   ├── index.tsx                # Entry point for the React app
│   └── setupTests.ts            # Test setup
│
├── .gitignore
├── package.json
├── tsconfig.json
├── README.md
└── yarn.lock                    # or package-lock.json



# Backend using repository pattern with the following structure ex

progressPro/
│
├── src/
│   ├── controllers/
│   │   └── userController.ts
│   ├── repositories/
│   │   └── userRepository.ts
│   ├── models/
│   │   └── userModel.ts
│   ├── db/
│   │   └── database.ts
│   ├── routes/
│   │   └── userRoutes.ts
│   ├── app.ts
│   └── types.ts
├── package.json
└── tsconfig.json

