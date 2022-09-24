import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddUserButton from "../../components/AddUserButton";
import TextField from "../../components/TextField";

const EditUser = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({ name: "", email: "" });

  const handleEditUser = () => {
    setValues({ name: "", email: "" });
    navigate("/");
  };

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
      <AddUserButton onClick={handleEditUser}>Edit</AddUserButton>
    </div>
  );
};

export default EditUser;
