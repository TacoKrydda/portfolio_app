import { categories, type CategoryFilter } from "../data/projects";

const options: CategoryFilter[] = ["Alla", ...categories];

interface Props {
  value: CategoryFilter;
  onChange: (value: CategoryFilter) => void;
}

export default function ProjectFilter({ value, onChange }: Props) {
  return (
    <div
      className="filter"
      role="group"
      aria-label="Filtrera projekt efter kategori"
    >
      {options.map((option) => (
        <button
          key={option}
          type="button"
          className="filter__button"
          aria-pressed={value === option}
          onClick={() => onChange(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
