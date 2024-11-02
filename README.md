# Student Information Display

This React application which uses TailwindCSS for styling. It basically displays a list of students using individual student cards. Data is sourced from a local Data.json file and rendered via the StudentCard component.

## Installation

1. Clone the repository:
   git clone https://github.com/ltc01/StudentsInfo.git

2. Navigate into the project directory:
   cd StudentsInfo

3. Install dependencies:
   npm install

4. Start the development server:
   npm run dev

   The app will be accessible at http://localhost:5173

## Project Structure

- StudentsList.js: Renders the list of students.
- StudentCard.js: Displays individual student information.
- Data.json: Contains sample student data.

## Data Format

Each student entry in Data.json should follow this format:

{
  "name": "John Doe",
  "profileImage": "url_to_image.jpg",
  "major": "Computer Science",
  "year": "Sophomore",
  "email": "john.doe@example.com",
  "actions": {
    "viewProfile": "url_to_profile",
    "contact": "contact_link"
  }
}

### Author
Developed by Laxmiii_