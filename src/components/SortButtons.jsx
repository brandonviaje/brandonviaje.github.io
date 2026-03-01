function SortButtons({ categories, currentFilter, onFilterChange }) {
  return (
    <div className="flex gap-4 mt-8 mb-4">
      {categories.map((cat) => (
        <button
          key={cat}
          className={`px-4 py-2 rounded transition-colors duration-200 ${
            currentFilter === cat ? "bg-[#F6F8FF] text-[#242F40] hover:bg-[#e0e4ff]" : "bg-[#313638] text-[#F6F8FF] hover:bg-[#3a3f46]"
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
