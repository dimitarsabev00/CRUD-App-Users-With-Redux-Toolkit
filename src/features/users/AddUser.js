import { useState } from "react";
import AddUserButton from "../../components/AddUserButton";
import TextField from "../../components/TextField";

const AddUser = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
  });

  const handleAddUser = () => {};
  return (
    <div className="mt-10 max-w-xl mx-auto">
      <TextField
        label="Name"
        value={values.name}
        onChange={(e) => setValues({ ...values, name: e.target.value })}
        inputProps={{ type: "text", placeholder: "Jhon Doe" }}
      />
      <br />
      <TextField
        label="Email"
        value={values.email}
        onChange={(e) => setValues({ ...values, email: e.target.value })}
        inputProps={{ type: "email", placeholder: "jhondoe@mail.com" }}
      />
      <AddUserButton onClick={handleAddUser}>Submit</AddUserButton>
    </div>
  );
};

export default AddUser;
