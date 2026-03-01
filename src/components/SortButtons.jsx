function SortButtons({ categories, currentFilter, onFilterChange }) {
  return (
    <div className="flex flex-wrap gap-3 mt-8 mb-4">
      {categories.map((cat) => (
        <button
          key={cat}
          className={`px-4 py-2 text-sm sm:text-base rounded transition-colors duration-200 ${
            currentFilter === cat
              ? "bg-[#F6F8FF] text-[#242F40]"
              : "bg-[#313638] text-[#F6F8FF]"
          }`}
          onClick={() => onFilterChange(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

export default SortButtons;
