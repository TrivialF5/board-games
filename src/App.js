import TextTitle from "./components/TextTitle"
import Select from "./views/simon/Select"

export default function App() {
  return (
    <>
      <header>
        <TextTitle className="text-center" colorText="text-orange-500" title="Simon" highlightTitle="says" />
      </header>
      <main className="min-h-screen">
        <Select />
      </main>
    </>
  )
}
