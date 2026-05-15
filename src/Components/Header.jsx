export function Header(props) {
  const { children } = props;
  return (
    <header className="mb-6 bg-white shadow transition-colors duration-300 dark:bg-gray-800">
      <div className="container mx-auto px-5 md:px-0">
        <div className="flex h-20 items-center justify-between">{children}</div>
      </div>
    </header>
  );
}
