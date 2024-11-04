export default function TodoForm({ handleSubmit, form, setForm, }) {
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-center">
        <input
          className="rounded-full mt-5 px-4 py-1 text-slate-600"
          type="text"
          placeholder="Görev Girin"
          value={form}
          onChange={(e) => setForm(e.target.value)}
        />
        <button className="text-white border-separate rounded-full px-4 py-1 bg-orange-600 border-none p20  hover:dark:bg-slate-600">
          Ekle
        </button>
      </form>
    </div>
  );
}
