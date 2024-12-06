'use client';

import { useRouter } from 'next/navigation';
import { Expense } from "@/src/types/Expense";

interface ExpenseListProps {
  expenses: Expense[];
}

const ExpenseList: React.FC<ExpenseListProps> = ({ expenses }) => {
  const router = useRouter();

  const handleDelete = async (id: string) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this expense?');
    if (!confirmDelete) return;

    try {
      const response = await fetch('api/expenses', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });

      if (response.ok) {
        alert('Expense deleted successfully!');
        router.refresh();
      } else {
        const errorData = await response.json();
        alert(`Failed to delete expense: ${errorData.error || response.statusText}`);
      }
    } catch (error) {
      console.error('Error deleting expense:', error);
      alert('An error occurred while deleting the expense.');
    }
  };

  const handleUpdateRedirect = (id: string) => {
    router.push(`edit-expense/${id}`);
  };

  const handleAddRedirect = () => {
    router.push('add-expense');
  };

  return (
    <div className="p-6 bg-gray-100">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg">
        <header className="p-6 bg-blue-600 text-white rounded-t-lg">
          <div className="flex justify-between items-center">
            <p className="text-2xl font-bold">Expense List</p>
            <button
              onClick={handleAddRedirect}
              className="bg-green-500 text-white px-4 py-2 rounded-lg shadow hover:bg-green-600"
            >
              Add Expense
            </button>
          </div>
        </header>
        <main className="p-6">
          <table className="w-full bg-gray-50 rounded-lg shadow-md border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600 uppercase">Date</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600 uppercase">Description</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600 uppercase">Category</th>
                <th className="px-4 py-3 text-right text-sm font-semibold text-gray-600 uppercase">Amount</th>
                <th className="px-4 py-3 text-center text-sm font-semibold text-gray-600 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((expense) => (
                <tr key={expense.id} className="hover:bg-gray-100 border-b">
                  <td className="px-4 py-3 text-sm text-gray-700">{expense.date}</td>
                  <td className="px-4 py-3 text-sm text-gray-700">{expense.description}</td>
                  <td className="px-4 py-3 text-sm text-gray-700">{expense.category}</td>
                  <td className="px-4 py-3 text-right text-sm text-gray-700">${expense.amount?.toFixed(2)}</td>
                  <td className="px-4 py-3 text-center text-sm">
                    <button
                      onClick={() => handleUpdateRedirect(expense.id)}
                      className="text-blue-500 hover:underline mr-4"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDelete(expense.id)}
                      className="text-red-500 hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      </div>
    </div>
  );
};

export default ExpenseList;
