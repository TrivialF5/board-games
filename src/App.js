import RoutesConfig from "./routes/RoutesConfig"
import TextTitle from "./components/TextTitle"

export default function App() {
  return (
    <>
      <header>
        <TextTitle className="text-center" colorText="text-orange-500" title="Simon" highlightTitle="says" />
      </header>
      <main className=" min-h-full">
        <RoutesConfig/>
      </main>
    </>
  )
}
