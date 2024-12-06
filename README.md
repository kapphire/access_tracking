# Personal Expense Tracker Challenge

## Project Overview
You've been tasked with creating a personal expense tracking application using modern web technologies.

## Technology Stack
- Frontend: Next.js 14/15 (App Router)
- Styling: Tailwind CSS
- Language: TypeScript (Recommended)

## Getting Started

### Prerequisites
- Node.js (v18 or later)
- npm or yarn
- Git

### Project Setup
1. Clone the project repository
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

## Project Requirements

### Functional Requirements
- Create a list view of expenses
- Add new expense form
- Edit existing expenses
- Delete expenses
- Basic dashboard with:
  - Total spending
  - Spending by category
  - Expenses over time visualization

### Technical Requirements
- Use Next.js 14/15 App Router
- Implement Tailwind CSS for styling
- Responsive design
- Use the provided `expenses.json` as your data source
- Implement error handling
- Use React hooks for state management

## Provided Resources
- `expenses.json`: Starter data file for expenses
- Project structure guidelines in project description

## Detailed Data Structure

### Expense Object Schema
```typescript
interface Expense {
  id: string;           // Unique identifier for the expense
  date: string;         // ISO 8601 date format (YYYY-MM-DD)
  amount: number;       // Expense amount in decimal format
  category: string;     // Category from predefined list
  description: string;  // Detailed description of the expense
  recurring?: boolean;  // Optional: Is this a recurring expense?
  tags?: string[];      // Optional: Additional categorization
}
```

### Complete JSON Structure
```json
{
  "expenses": [
    {
      "id": "1",
      "date": "2024-01-15",
      "amount": 50.00,
      "category": "Food",
      "description": "Weekly grocery shopping at local supermarket",
      "recurring": false,
      "tags": ["groceries", "weekly-shopping"]
    },
    {
      "id": "2", 
      "date": "2024-01-16",
      "amount": 30.00,
      "category": "Transportation",
      "description": "Uber ride to downtown",
      "recurring": false,
      "tags": ["commute"]
    },
    {
      "id": "3",
      "date": "2024-01-20",
      "amount": 75.50,
      "category": "Entertainment",
      "description": "Movie night and dinner",
      "recurring": false,
      "tags": ["social", "weekend"]
    }
  ],
  "categories": [
    "Food",
    "Transportation", 
    "Entertainment", 
    "Utilities", 
    "Miscellaneous",
    "Healthcare",
    "Education",
    "Personal Care"
  ],
  "metadata": {
    "lastUpdated": "2024-01-25T10:30:00Z",
    "totalExpenses": 155.50,
    "currency": "USD"
  }
}
```

### Data Validation Rules
- `id`: Must be a unique string
- `date`: Must be a valid date in ISO 8601 format
- `amount`: Positive number with up to 2 decimal places
- `category`: Must be from the predefined categories list
- `description`: Maximum 250 characters
- `recurring`: Optional boolean
- `tags`: Optional array of strings

## Suggested Data Manipulation Requirements
1. Generate unique IDs for new expenses
2. Validate input against schema
3. Handle date parsing and formatting
4. Implement category validation
5. Support adding/removing expenses
6. Calculate total expenses by category

## Evaluation Criteria
1. Code Quality
   - Clean, readable code
   - Proper component structure
   - Efficient use of React hooks

2. Functionality
   - Complete CRUD operations
   - Responsive design
   - Error handling

3. Technical Implementation
   - Next.js App Router usage
   - Tailwind CSS implementation
   - TypeScript type safety

## Bonus Features (Optional)
- Expense filtering
- Sorting functionality
- Basic authentication
- Expense data export
- Persistent storage solution

## Submission Guidelines
1. Use Git for version control
2. Include a detailed README.md
3. Ensure the application runs without errors
4. Submit via GitHub repository

## Time Limit
- Total project time: 4 hours
- Focus on core functionality and code quality

## Support
If you have any questions about the project requirements, please reach out to your contact.

## Good Luck!
Show us your skills and creativity in building this expense tracker.
