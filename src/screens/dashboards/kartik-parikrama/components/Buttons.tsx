import { Button } from "@/components/ui/button";

const Buttons = () => {
  return (
    <div className="grid sm:grid-cols-3 grid-cols-2 gap-8 w-2/3 mt-20">
      <Button className="w-full sm:w-auto px-6  py-3">Admin Home</Button>
      <Button className="w-full sm:w-auto px-6  py-3">Admi Register</Button>
      <Button className="w-full sm:w-auto px-6  py-3">Process Payments</Button>
      <Button className="w-full sm:w-auto px-6  py-3">
        Offsite Allocations
      </Button>
      <Button className="w-full sm:w-auto px-6  py-3">MailingList Home</Button>
      <Button className="w-full sm:w-auto px-6  py-3">View Sponsors</Button>
      <Button className="w-full sm:w-auto px-6  py-3">Add new Sponsors</Button>
    </div>
  );
};

export default Buttons;
