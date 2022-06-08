import Select from "./views/simon/Select"

export default function App() {
  return (
    <>
      <header>
        <h1 className="text-3xl font-bold uppercase text-center">
          board games
        </h1>
      </header>
      <main>
        <Select />
      </main>
    </>
  )
}
