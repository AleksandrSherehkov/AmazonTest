# React Table Management App

## Description

This web application is a simple tool for managing data presented in a hierarchical structure of
tables: Accounts, Profiles, and Campaigns. Users can view, sort, filter, and navigate through levels
of data by selecting specific records.

## Technology Stack

- React
- Vite
- TypeScript
- Tailwind

## Features

- **Three Levels of Tables**: Accounts, Profiles, Campaigns.
- **Clickable Rows in Tables**: Clicking a row navigates to a detailed view of the selected entity.
- **Sorting and Filtering**: Implemented for each table.
- **Pagination**: Navigate through pages of data.

## Installation and Launch

1. Clone the repository:

   ```
   git clone https://github.com/your-username/react-table-management-app.git
   ```

2. Navigate to the project directory:

   ```
   cd AmazonTest-app
   ```

3. Install dependencies:

   ```
   npm install
   ```

4. Start the project:
   ```
   npm run dev
   ```

## Project Structure

```
src
│
├── components    # Reusable components (e.g., tables, pagination)
├── hooks         # Custom hooks (e.g., useSortableAndFilterableData)
├── pages         # Application pages (Accounts, Profiles, Campaigns)
├── utils         # Utilities and helper functions
└── App.tsx       # Main application component
```

## Components

### `TableComponent`

This component is responsible for displaying data tables, providing sorting, filtering, and
pagination functionality.

### `PaginationComponent`

A component for navigating through data pages in the table.

## Hooks

### `useSortableAndFilterableData`

A hook for managing data sorting and filtering in tables.

### `usePagination`

A hook for managing data pagination.

## Demo Data

Data for the tables are provided as constants within the respective components or can be imported
from external JSON files.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Author

[AleksandrSherehkov](https://github.com/AleksandrSherehkov)

---

For further information or questions, please refer to the Issues section on GitHub.
