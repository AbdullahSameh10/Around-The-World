export function MessageBox(props) {
  const { children } = props;
  return (
    <div className="flex h-20 items-center justify-center rounded-xl bg-gray-200 text-center shadow-[0_0_10px_rgba(0,0,0,0.5),0_0_10px_rgba(0,0,0,0.5)_inset] dark:bg-gray-950 dark:text-gray-100 dark:shadow-[0_0_20px_rgba(255,255,255,0.5),0_0_20px_rgba(255,255,255,0.5)_inset]">
      <p className="text-2xl font-bold">{children}</p>
    </div>
  );
}
