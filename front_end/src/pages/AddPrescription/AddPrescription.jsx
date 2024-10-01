import FormActions from "./FormActions";
import PrescriptionForm from "./PrescriptionForm";
import PrescriptionHeader from "./PrescriptionHeader";

const AddPrescription = () => {
  return (
    <div className="w-[85%] mx-auto mb-4">
      <PrescriptionHeader />
      <main className="bg-white w-full h-fit mt-4 p-4 rounded-lg">
        <PrescriptionForm />
      </main>
      <FormActions />
    </div>
  );
}

export default AddPrescription;