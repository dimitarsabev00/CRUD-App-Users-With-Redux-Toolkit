import { Route, Routes } from "react-router-dom";
import AddUser from "./features/users/AddUser";
import UserList from "./features/users/UserList";

function App() {
  return (
    <div className="container mx-auto px-2 max-w-5xl pt-10 md:pt-32">
      <h1 className="text-center font-bold text-2xl text-gray-700">
        UI-Add-Users-In-Collection-With-Redux-Toolkit
      </h1>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route
          path="*"
          element={
            <h1 className="text-center font-bold text-2xl text-gray-700 pt-10">
              Error Page
            </h1>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
