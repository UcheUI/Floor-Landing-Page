export default function PricingTable() {
  return (
    <div
      id="pricing-table"
      className="flex lg:flex-row flex-col items-center justify-evenly p-4"
    >
      <span className="flex flex-col items-start">
        <h1 className="text-center text-5xl mb-4">Become a Member Today!</h1>
        <List label="Schedule unlimited 1:1 Intros " />
        <List label="Host up to 20 IRL/URL events " />
        <List label="Host lobbies with up to 50 users  " />
        <List label="Full access to Floor Community  " />
        <List label="Access to exclusive opportunities  " />
        <List label="Access to 5000+ Tech professionals " />
      </span>
      <stripe-pricing-table
        pricing-table-id="prctbl_1MpCFPKgkwCg7iLhBjMezccz"
        publishable-key="pk_live_51MnDJQKgkwCg7iLhCkZyiXhlrdf3MWpoxrvxStsX3SLzAiTs8kYvUK8MGRSLYbOArldVh6bMlz8NGTpPXnEtfnEi003FL8vxbv"
      ></stripe-pricing-table>
    </div>
  );
}

function List({ label }) {
  return (
    <div className="flex my-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        fill="#1245ba"
        viewBox="0 0 256 256"
      >
        <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"></path>
      </svg>
      <span className="font-semibold text-md ml-2">{label}</span>
    </div>
  );
}
