const Accounts = () => {
  return (
    <div className="page">
      <div className="mb-4">
        <div className="flex justify-between items-center">
          <h4 className="text-2xl font-semibold">Accounts</h4>
          <button className="rounded-md border py-2 px-4">
            <i class="bi bi-plus-lg"></i> New Account
          </button>
        </div>
        <p className="text-lg font-thin">
          A collection of all your accounts / businesses
        </p>
      </div>
      <a href="">
        <div className="mb-4 p-4 rounded-md border">
          <h6 className="text-xl font-semibold mb-4">1. KCB Savings Account</h6>
          <div className="flex justify-start items-center">
            <span className="text-sm">
              <span className="font-semibold">Balance:</span> 10000
            </span>
            <div className="mx-2"></div>
            <span className="text-sm">
              <span className="font-semibold">Currency:</span> USD
            </span>
            <div className="mx-2"></div>
            <span className="text-sm">
              <span className="font-semibold">Created:</span> One month ago
            </span>
            <div className="mx-2"></div>
            <span className="text-sm">
              <span className="font-semibold">Updated:</span> 5 hours ago
            </span>
          </div>
        </div>
      </a>
      <a href="">
        <div className="mb-4 p-4 rounded-md border">
          <h6 className="text-xl font-semibold mb-4">
            2. Personal Checking Account
          </h6>
          <div className="flex justify-start items-center">
            <span className="text-sm">
              <span className="font-semibold">Balance:</span> 10000
            </span>
            <div className="mx-2"></div>
            <span className="text-sm">
              <span className="font-semibold">Currency:</span> USD
            </span>
            <div className="mx-2"></div>
            <span className="text-sm">
              <span className="font-semibold">Created:</span> One month ago
            </span>
            <div className="mx-2"></div>
            <span className="text-sm">
              <span className="font-semibold">Updated:</span> 5 hours ago
            </span>
          </div>
        </div>
      </a>
      <a href="">
        <div className="mb-4 p-4 rounded-md border">
          <h6 className="text-xl font-semibold mb-4">3. Retail Shop Account</h6>
          <div className="flex justify-start items-center">
            <span className="text-sm">
              <span className="font-semibold">Balance:</span> 10000
            </span>
            <div className="mx-2"></div>
            <span className="text-sm">
              <span className="font-semibold">Currency:</span> USD
            </span>
            <div className="mx-2"></div>
            <span className="text-sm">
              <span className="font-semibold">Created:</span> One month ago
            </span>
            <div className="mx-2"></div>
            <span className="text-sm">
              <span className="font-semibold">Updated:</span> 5 hours ago
            </span>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Accounts;
