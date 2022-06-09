import TextTitle from "./components/TextTitle"
import Select from "./views/simon/Select"

export default function App() {
  return (
    <>
      <header>
        <TextTitle className="text-center" colorText="text-blue-500" prevTitle="e" title="hola" highlightTitle="sñlidahf" />
      </header>
      <main>
        <Select />
      </main>
    </>
  )
}
