import { Header } from "./components/Header";
import { StudentsList } from "./components/StudentsList";
import { SubHeading } from "./components/SubHeading";

function App() {
  return (
    <>
      <div className="md:px-20 px-10 py-8 w-full h-full md:h-[100vh] bg-gradient-to-r from-purple-200 via-amber-50 to-purple-100">
        <Header />
        <SubHeading />
        <StudentsList />
      </div>
    </>
  );
}

export default App;
