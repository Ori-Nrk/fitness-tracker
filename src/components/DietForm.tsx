import { useState } from 'react';

export default function DietForm() {
  const [meal, setMeal] = useState({
    name: '',
    calories: '',
    protein: '',
    carbs: '',
    fat: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement API call to save meal
    console.log('Meal submitted:', meal);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Meal Name
        </label>
        <input
          type="text"
          id="name"
          value={meal.name}
          onChange={(e) => setMeal({ ...meal, name: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          required
        />
      </div>
      <div>
        <label htmlFor="calories" className="block text-sm font-medium text-gray-700">
          Calories
        </label>
        <input
          type="number"
          id="calories"
          value={meal.calories}
          onChange={(e) => setMeal({ ...meal, calories: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          required
        />
      </div>
      <div>
        <label htmlFor="protein" className="block text-sm font-medium text-gray-700">
          Protein (g)
        </label>
        <input
          type="number"
          id="protein"
          value={meal.protein}
          onChange={(e) => setMeal({ ...meal, protein: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          required
        />
      </div>
      <div>
        <label htmlFor="carbs" className="block text-sm font-medium text-gray-700">
          Carbs (g)
        </label>
        <input
          type="number"
          id="carbs"
          value={meal.carbs}
          onChange={(e) => setMeal({ ...meal, carbs: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          required
        />
      </div>
      <div>
        <label htmlFor="fat" className="block text-sm font-medium text-gray-700">
          Fat (g)
        </label>
        <input
          type="number"
          id="fat"
          value={meal.fat}
          onChange={(e) => setMeal({ ...meal, fat: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Log Meal
      </button>
    </form>
  );
}