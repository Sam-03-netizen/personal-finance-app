export default function TransactionFilters({
  selectedCategory,
  selectedType,
  onCategoryChange,
  onTypeChange,
  categories,
}) {
  return (
    <div className="transaction-filters">
      <div className="filter-group">
        <label htmlFor="categoryFilter" className="filter-label">
          Category
        </label>
        <select
          id="categoryFilter"
          value={selectedCategory}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="filter-select"
        >
          <option value="all">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="typeFilter" className="filter-label">
          Type
        </label>
        <select
          id="typeFilter"
          value={selectedType}
          onChange={(e) => onTypeChange(e.target.value)}
          className="filter-select"
        >
          <option value="all">All Types</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>
    </div>
  )
}