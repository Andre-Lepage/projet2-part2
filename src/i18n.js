import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, 
    },
    
    resources: {
      en: { 
        translation: {
            code: "fr",
         title: "Please Follow the steps below to apply to our team",
         step1: "Step 1: Enter your personal information",
         first_name: "First name:",
         last_name: "Last name:",
         birth_date: "Birth Date:",
         step2: "Step 2: Enter your location details",
         country: "Country:",
         city: "City: ",
         zip: "Zip Code:",
         step3: "Step 3: Enter important job information",
         salary: "Expected Salary",
         position: "Position Applying For",
         writer: "Writer",
         editor: "Editor",
         manager: "Manager",
         email: "Email:",
         resume: "Resume",
         success: "Success! We have received your application",
         categories: "Categories",
         join: "Join our Team",
         submit: "Submit",
         expectedTooltip: "This is the starting salary you expect to receive when working for the company",
         positionTooltip: "This is the position you are applying to work as at Virtual Odyssey",
         zipTooltip: "The zip code should have 6 characters. It should have this format of letters and numbers: A1B2C4",
         help: "Help"
        }
      },
      fr: {
        translation: {
            code: "en",
         title: "Veuillez suivre les étapes ci-dessous pour postuler à notre équipe ",
         step1: "Étape 1 : Saisissez vos informations personnelles",
         first_name: "Prénom:",
         last_name: "Nom:",
         birth_date: "Date de Naissance",
         step2: "Étape 2 : Entrez les détails de votre emplacement",
         country: "Pays:",
         city: "Ville: ",
         zip: "Code Postale:",
         step3: "Étape 3 : Saisissez les informations importantes sur le travail",
         salary: "Prétentions Salariales:",
         position: "Position Voulue: ",
         writer: "Écrivain",
         editor: "Editeur",
         manager: "Gérant",
         email: "Email:",
         resume: "Résumé",
         success: "Succès! Nous avons bien reçu votre candidature",
         categories: "Catégories",
         join: "Joindre notre équipe",
         submit: "Soumettre",
         expectedTooltip: "Ceci est le salaire de départ que vous prévoyez de recevoir lorsque vous travaillez pour l'entreprise",
        positionTooltip: "Ceci est le poste pour lequel vous postulez chez Virtual Odyssey",
        zipTooltip: "Le code postal doit comporter 6 caractères. Il doit avoir ce format de lettres et de chiffres : A1B2C4",
        help: "Aide"
        }
      },
    }
  });

export default i18n;