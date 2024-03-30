import dashboardBanner from "../../../assets/dashboard.jpg";

const Search = () => {
  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Kartik Parikrama 2023
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          Welcome to Sadhu Sanga Retreat Portal
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4 flex items-center justify-center">
        <img
          className="rounded-lg"
          src={dashboardBanner}
          alt="dashboard-banner"
        />
      </div>
    </div>
  );
};

export default Search;
