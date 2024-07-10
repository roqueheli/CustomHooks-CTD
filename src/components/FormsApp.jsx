import useForm from "../hooks/useForm";

const initialValues = {
  username: '',
  email: '',
  password: '',
}
const FormsApp = () => {
  const { username, email, password, onInputChange } = useForm(initialValues);
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState(initialValues)
  }

  return (
    <>
      <h4>Soy un formulario</h4>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input type="text" className="form-control" id="username" name="username" value={username} onChange={onInputChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" name="email" value={email} onChange={onInputChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" name="password" value={password} onChange={onInputChange} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </>
  );
};

export default FormsApp;
