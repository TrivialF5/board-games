import RoutesConfig from "./components/routes/RoutesConfig"
import TextTitle from "./components/TextTitle"

export default function App() {
  return (
    <>
      <header>
        <TextTitle className="text-center" colorText="text-blue-500" prevTitle="e" title="hola" highlightTitle="sñlidahf" />
      </header>
      <main>
        <RoutesConfig/>
      </main>
    </>
  )
}
