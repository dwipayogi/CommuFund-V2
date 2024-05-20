export default function Section({id, children}) {
  return (
    <section id={id} className="pt-20">
    <h2 className="text-center text-2xl font-bold md:text-3xl lg:text-4xl">
      {id}
    </h2>
    <div className="flex w-full justify-end">
      <select
        id="cars"
        name="cars"
        className="mb-2 flex cursor-pointer rounded-lg border-4 border-primary-500 bg-primary-50 p-2 text-lg font-semibold text-primary-500 outline-none"
      >
        <option value="kategori" className="hidden">
          Kategori
        </option>
        <option value="bencana">Bencana</option>
        <option value="infrastruktur">Infrastruktur</option>
        <option value="kesehatan">Kesehatan</option>
      </select>
    </div>
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {children}
    </div>
  </section>
  )
}