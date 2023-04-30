const NewAccount = () => {
  return (
    <form>
      <div className="mb-4">
        <label className="block">
          <span>Email</span>
          <input
            type="email"
            name="email"
            className="mt-1 block w-full rounded-md border focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>
      </div>
      <div className="mb-8">
        <label className="block">
          <span>Password</span>
          <input
            type="password"
            name="password"
            className="mt-1 block w-full rounded-md border focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>
      </div>
      <div className="mb-4">
        <button type="submit" className="w-full rounded-md border py-2 px-4">
          {/* {loading ? <ButtonSpinner /> : <span>Submit</span>} */}
          Submit
        </button>
      </div>
    </form>
  );
};

export default NewAccount;
