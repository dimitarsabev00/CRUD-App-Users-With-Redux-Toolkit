import AddUserButton from "../../components/AddUserButton";
import TextField from "../../components/TextField";

const AddUser = () => {
  return (
    <div className="mt-10 max-w-xl mx-auto">
      <TextField
        label="Name"
        inputProps={{ type: "text", placeholder: "Jhon Doe" }}
      />
      <br />
      <TextField
        label="Email"
        inputProps={{ type: "email", placeholder: "jhondoe@mail.com" }}
      />
      <AddUserButton>Submit</AddUserButton>
    </div>
  );
};

export default AddUser;
