export default function TodoFilter({ filter, FilterFn, filterList }) {
  const statusText = {
    All: "Tümü",
    Done: "Yapıldı",
    Undone: "Yapılacak",
  };
  return (
    <div className="flex flex-col gap-3 top-2">
   
      <span className="text-slate-400 p-2">
        {filterList.length} adet yapılacak listesi bulundu
      </span>
      {Object.keys(statusText).map((status) => (
        <a
          key={status}
          href="#"
          onClick={(e) => {
            e.preventDefault();
            FilterFn(status);
          }}
          className={
            filter === status
              ? "border-separate rounded-full px-4 py-1 w-2/3 text-center hover:text-slate-400 border-none p-2 dark:bg-slate-600 hover:bg-orange-600"
              : "border-separate rounded-full px-4 py-1 text-center bg-orange-600 hover:bg-slate-600"
          }
        >
         
          {statusText[status]}
        </a>
      ))}
    </div>
  );
}
