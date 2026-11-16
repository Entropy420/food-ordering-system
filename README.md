# Crave — Online Food Ordering System

A responsive online food-ordering website built using HTML5, Tailwind CSS, custom CSS and vanilla JavaScript.

Crave allows users to explore food items, search and filter dishes, add products to a shopping cart, manage quantities, calculate their bill and place simulated orders through a checkout form.

## Objectives

- Develop a simple and user-friendly food-ordering interface.
- Implement dynamic food menu rendering using JavaScript.
- Demonstrate DOM manipulation and event handling.
- Implement shopping cart and checkout functionality.
- Understand collaborative software development using Git and GitHub.
- Practice branching, commits, pull requests, code reviews and merge-conflict resolution.

## Team Members

| Student      | Roll Number | Responsibilities                                                                 |
| ------------ | ----------: | -------------------------------------------------------------------------------- |
| Ayush Mann   |          21 | Food menu, food data, search, category filtering, HTML structure and CSS styling |
| Prince Verma |          43 | Shopping cart, quantity management, bill calculation and checkout functionality  |

## Features

1. **Food Menu:** Browse food items with images, descriptions, ratings and prices.
2. **Food Search:** Search for dishes by name, category or description.
3. **Category Filtering:** Filter food items by categories such as Pizza, Burgers, Pasta, Indian, Desserts and Drinks.
4. **Shopping Cart:** Add and remove food items from the cart.
5. **Quantity Management:** Increase or decrease the quantity of selected items.
6. **Bill Calculation:** Automatically calculate subtotal, delivery fee and final amount.
7. **Checkout:** Enter customer details and submit an order through a checkout form.
8. **Order Confirmation:** Generate a simulated order confirmation.
9. **Local Storage:** Preserve cart information and demo orders in the browser.

## Technologies Used

- HTML5 — Website structure.
- Tailwind CSS — Utility-based styling.
- Custom CSS — Layout, components and responsive design.
- JavaScript — Menu rendering, search, filtering, cart and checkout functionality.
- Git — Version control.
- GitHub — Repository hosting and collaboration.
- Browser localStorage — Local data persistence.

## Project Structure

```text
food-ordering-system/
│
├── index.html
│
├── css/
│   └── style.css
│
├── js/
│   ├── main.js
│   ├── menu.js
│   └── cart.js
│
├── README.md
├── CONTRIBUTING.md
└── .gitignore
```

## Installation and Execution

1. Clone the repository:

   ```bash
   git clone https://github.com/USERNAME/food-ordering-system.git
   ```

2. Navigate to the project directory:

   ```bash
   cd food-ordering-system
   ```

3. Open the project in Visual Studio Code.

4. Open `index.html` in a browser or use the VS Code Live Server extension.

5. Ensure an internet connection is available for Tailwind CSS CDN and externally hosted food images.

No backend installation or database configuration is required.

## Git and GitHub Collaboration

The project was developed collaboratively by two students using Git and GitHub.

### Branch Structure

- `main` — Main project branch.
- `feature-member1` — Ayush Mann's development branch.
- `feature-member2` — Prince Verma's development branch.

### Collaboration Workflow

1. The project repository was initialized and hosted on GitHub.
2. Both students worked on separate feature branches.
3. Changes were committed with descriptive commit messages.
4. Both feature branches were pushed to the remote repository.
5. Pull requests were created to propose changes to the main branch.
6. Each student reviewed the other student's contributions.
7. A merge conflict was deliberately created by modifying the same line in a shared file on separate branches.
8. The conflict was resolved and the corrected version was committed.

### Version Control Commands

Some of the Git commands used during development:

```bash
git branch
git switch -c feature-member1
git add .
git commit -m "commit message"
git push
git pull
git merge
git log --oneline --graph --all
```

## Screenshots

Screenshots demonstrating the completed application:

- Homepage and navigation.
<img width="1600" height="895" alt="Crave's HomePage" src="https://github.com/user-attachments/assets/c40c7890-291a-4f3e-b064-be0b4e2b4998" />

- Food menu and food cards.
<img width="1600" height="1152" alt="Crave's Food Menu" src="https://github.com/user-attachments/assets/5ec8b54d-1554-4e0b-b768-83a5535e587b" />

- Search and category filtering.
<img width="1600" height="850" alt="Crave's Category Filters" src="https://github.com/user-attachments/assets/734dcbef-1e13-4cf3-9fd7-606f84a37b9d" />
<img width="1600" height="978" alt="Crave's Search Feature" src="https://github.com/user-attachments/assets/038a449d-a5d0-48b6-8e95-18e345003a97" />


- Shopping cart and quantity controls.
<img width="1600" height="1110" alt="Crave's Shopping Cart" src="https://github.com/user-attachments/assets/d7d84a28-776e-4f83-9123-63dcd85887bc" />
<img width="1600" height="976" alt="Crave's Quality Controls" src="https://github.com/user-attachments/assets/79a4ceba-3c98-406d-aa47-d9292e430d22" />

- Bill calculation and checkout.
<img width="1600" height="974" alt="Crave's Checkout Pop-up" src="https://github.com/user-attachments/assets/cfe81fa7-6a7b-43a1-9d70-3d4eb9d8e351" />

- Order confirmation.
<img width="1365" height="423" alt="Order Confirmation Pop-up" src="https://github.com/user-attachments/assets/4a7daee8-f596-4db3-aeb6-14bc1d81a13e" />

## Limitations

- This is a frontend demonstration project.
- No backend server or database is connected.
- No real payment gateway is integrated.
- Orders are simulated and stored locally in the browser.
- Food images are loaded from external image sources.

**Project:** Online Food Ordering System
**Course:** SEC101
**Academic Year:** 2026–2027
