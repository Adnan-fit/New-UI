import PropTypes from "prop-types";

/**
 * ListDropDown component renders a list drop-down with autocomplete functionality.
 * @param {object} props - Component props.
 * @param {Array} props.suggestions - The array of suggestions to be rendered.
 * @param {React.ComponentType} props.startAdornment - The start adornment component to be rendered for each suggestion item.
 * @param {Function} props.onClick - The function to handle click events on suggestion items.
 * @param {string} [props.classes=""] - Additional CSS classes to apply to the component.
 * @returns {JSX.Element} - The rendered ListDropDown component.
 */
const ListDropDown = ({ suggestions, startAdornment: StartAdornment, onClick, classes = "" }) => {
  /**
   * Handles click event on a suggestion item.
   * @param {any} item - The clicked suggestion item.
   */
  const handleClickItem = (item) => {
    onClick(item);
  };

  return (
    <>
      {suggestions && (
        <ul className={`z-10 max-h-[27vh] shadow-sm ${classes}`}>
          {suggestions.map((item, index) => (
            <li
              key={index}
              className="flex cursor-pointer items-center justify-start border-b-[1.5px] border-gray-100 px-2 py-3 hover:bg-slate-100"
              onClick={() => handleClickItem(item)}
            >
              {StartAdornment && (
                <span className="mr-2 h-6 w-6 rounded-full">
                  <StartAdornment width={8} height={8} sizes="100vw" isPriority={false} />
                </span>
              )}
              {typeof item === "object" ? Object.values(item) : item}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

ListDropDown.propTypes = {
  suggestions: PropTypes.array.isRequired,
  startAdornment: PropTypes.elementType,
  classes: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default ListDropDown;
