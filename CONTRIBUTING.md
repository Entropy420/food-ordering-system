# Contributing to Crave

Thank you for contributing to **Crave — Online Food Ordering System**.

This project is developed collaboratively by a two-member team as part of the **SEC101 MCA Group Assignment (2026–2027)**.

## Team Members

| Student   | Name         | Roll Number |
| --------- | ------------ | ----------- |
| Student 1 | Ayush Mann   | 21          |
| Student 2 | Prince Verma | 43          |

## Project Contributions

### Student 1 — Ayush Mann

- Initial project structure and HTML page layout
- Food menu data and menu-related content
- Food ordering interface
- CSS styling and visual design

### Student 2 — Prince Verma

- Dynamic food menu rendering
- Search and category filtering functionality
- JavaScript page interactions and event handling
- Shopping cart implementation
- Quantity management and bill calculations
- Checkout interface and simulated order functionality

## Branching Strategy

The project follows a feature-branch workflow to keep development organized.

| Branch            | Purpose                        |
| ----------------- | ------------------------------ |
| `main`            | Stable and integrated project  |
| `feature-member1` | Student 1's development branch |
| `feature-member2` | Student 2's development branch |

Each member develops their assigned features on their respective branch rather than directly modifying `main`.

## Collaboration Workflow

The following workflow is used for collaborative development:

1. Clone the repository to the local machine.
2. Switch to the appropriate feature branch.
3. Make changes to the assigned project files.
4. Stage and commit changes with meaningful commit messages.
5. Push the feature branch to GitHub.
6. Create a Pull Request to merge changes into `main`.
7. Check the changes and resolve any conflicts before merging.
8. Pull the latest changes from `main` into the local branch before continuing development.

## Git Commands

The following commands are commonly used during development.

**Clone the repository**

```bash
git clone https://github.com/Entropy420/food-ordering-system.git
cd food-ordering-system
```

**Create and switch to a feature branch**

```bash
git switch -c feature-member1
```

**Stage and commit changes**

```bash
git add .
git commit -m "Describe your changes"
```

**Push changes to GitHub**

```bash
git push -u origin feature-member1
```

**Get the latest changes from main**

```bash
git switch main
git pull origin main
git switch feature-member1
git merge main
```

## Commit Guidelines

To maintain a readable Git history:

- Use meaningful and descriptive commit messages.
- Keep commits focused on specific changes.
- Avoid committing unrelated files.
- Commit working changes regularly.

Examples:

```text
added food menu data
implemented category filters
created shopping cart interface
implemented checkout functionality
updated project documentation
```

## Merge Conflict Resolution

Merge conflicts may occur when multiple contributors modify the same file.

When a conflict occurs:

1. Identify the conflicting file.
2. Open the file and examine the conflicting changes.
3. Decide which changes should be retained or combine both where appropriate.
4. Remove Git conflict markers.
5. Save the corrected file.
6. Stage and commit the resolved changes.
7. Push the updated branch to GitHub.

The team also demonstrates merge conflict creation and resolution using `README.md` as part of the assignment.

**Project:** Crave — Online Food Ordering System  
**Course:** SEC101 — Advanced Tools and Applications  
**Academic Year:** 2026–2027
