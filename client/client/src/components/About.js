import React from 'react';

const About = () => {
  return (
    <div className="main-container d-flex flex-column justify-content-start">
      <h1>About HouseHunt</h1>
   
      <p>
  
The House Hunt project is a web application designed to streamline the process of searching for houses and managing property listings. It serves as a platform where potential renters or buyers (native users) can easily find available properties, while house owners can list their properties and manage inquiries. Additionally, the application includes an admin panel for overseeing the entire system, ensuring smooth operations and user management.
</p>

   <p>Native Users: Users can create accounts to access additional features, such as saving favorite listings and making inquiries. The registration process typically involves providing basic information like name, email, and password.
   Secure Login: Registered users can log in securely to their accounts, ensuring that their information and preferences are protected.
</p>

   <p>- **For House Owners**: Property owners can list their houses for rent or sale. They can provide detailed information about each property, including:
   Title, Location, Price, Description, Images
   - This feature allows house owners to showcase their properties effectively to attract potential tenants or buyers.
</p>

<p>
   - Users can search for houses based on various criteria, such as:
     - Location (city, neighborhood)
     - Price range
     - Number of bedrooms and bathrooms
   - This functionality enhances user experience by allowing them to find properties that meet their specific needs quickly.
   - Admins have access to a dedicated panel where they can manage the entire application. This includes:
     - Overseeing user accounts (both native users and house owners)
     - Managing house listings
     - Handling bookings and inquiries
   - The admin panel ensures that the application runs smoothly and that any issues can be addressed promptly.<br/>
</p>

   

- **PHP**: The backend programming language that handles server-side logic, database interactions, and user authentication.<br/>
- **MySQL**: A relational database management system used to store user information, property listings, and booking details.<br/>
- **HTML/CSS**: The markup and styling languages used to create the structure and design of the web application.<br/>
- **Bootstrap**: A front-end framework that provides responsive design components, ensuring the application looks good on various devices.<br/>
- **JavaScript**: Used to enhance interactivity and client-side functionalities, such as form validation and dynamic content updates.<br/>

    </div>
  );
};

export default About;
