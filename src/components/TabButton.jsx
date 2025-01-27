export default function TabButton({ children, isSelected, ...attribs }) {
  return (
    <li>
      <button className={isSelected ? "active" : null} {...attribs}>
        {children}
      </button>
    </li>
  );
}
