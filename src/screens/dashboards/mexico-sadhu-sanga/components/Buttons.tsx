import { Button } from "@/components/ui/button";

const Buttons = () => {
  return (
    <div className="grid sm:grid-cols-3 md:grid-cols-2 gap-4 lg:gap-8 w-full max-w-screen-lg mx-auto mt-20 px-4">
      <Button className="w-full px-6 py-3">Admin Home</Button>
      <Button className="w-full px-6 py-3">Admin Register</Button>
      <Button className="w-full px-6 py-3">Process Payments</Button>
      <Button className="w-full px-6 py-3">Offsite Allocations</Button>
      <Button className="w-full px-6 py-3">MailingList Home</Button>
      <Button className="w-full px-6 py-3">View Sponsors</Button>
      <Button className="w-full px-6 py-3">Add new Sponsors</Button>
    </div>
  );
};

export default Buttons;
