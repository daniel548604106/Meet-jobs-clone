module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'hero-img':
          "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80')",
        'referrer-banner-img':
          "url('https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
        'employer-banner-img':
          "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1502&q=80')",
        'cta-img':
          "url('https://images.unsplash.com/photo-1531498352491-042fbae4cf57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1334&q=80')",
        'footer-texture': "url('/img/footer-texture.png')",
      }),
      color: {
        'button-blue': '#189fac',
      },
      width: {
        '30px': '30px',
        '40px': '40px',
        '50px': '50px',
        '60px': '60px',
        '70px': '70px',
        '200px': '200px',
        '300px': '300px',
        '500px': '500px',
      },
      height: {
        '30px': '30px',
        '40px': '40px',
        '50px': '50px',
        '60px': '60px',
        '70px': '70px',
        '300px': '300px',
        '730px': '730px',
        '60vh': '60vh',
        '90vh': '90vh',
      },
      minHeight: {
        '30px': '30px',
        '40px': '40px',
        '50px': '50px',
        '60px': '60px',
        '70px': '70px',
        '300px': '300px',
        '730px': '730px',
        '60vh': '60vh',
        '70vh': '70vh',
        '90vh': '90vh',
      },
      margin: {
        '30px': '30px',
        '40px': '40px',
        '50px': '50px',
        '60px': '60px',
        '70px': '70px',
        '80px': '80px',
        '90px': '90px',
        '100px': '100px',
      },
      inset: {
        '30px': '30px',
        '40px': '40px',
        '50px': '50px',
        '60px': '60px',
        '70px': '70px',
        '80px': '80px',
        '90px': '90px',
        '100px': '100px',
      },
      minWidth: {
        '30px': '30px',
        '40px': '40px',
        '50px': '50px',
        '60px': '60px',
        '70px': '70px',
        '80px': '80px',
        '90px': '90px',
        '100px': '100px',
        '300px': '300px',
      },
      maxWidth: {
        '300px': '300px',
        '350px': '350px',
        '760px': '760px',
        '1200px': '1200px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
