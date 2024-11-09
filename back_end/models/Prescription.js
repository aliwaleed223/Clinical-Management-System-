import mongoose from "mongoose";

const PrescriptionSchema = new mongoose.Schema(
  {
    prescriptionNumber: {
      type: Number,
      unique: true,
    },
    patientName: {
      type: String,
      trim: true,
      required: true,
    },
    patientAge: {
      type: Number,
    },
    patientGender: {
      type: String,
    },
    medicalProcedure: {
      type: String,
    },
    reviewDate: {
      type: Date,
    },
    diagnosis: {
      type: String,
    },
    dose: {
      type: String,
    },
    doctorName: {
      type: String,
    },
    procedureCost: {
      type: Number,
    },
    prescriptions: [
      {
        medicineName: { type: String, required: true },
        dose: { type: String, required: true },
        form: { type: String },
        frequency: { type: String, required: true },
        duration: { type: String, required: true },
        instructions: { type: String },
        quantity: { type: Number, required: true },
      },
    ],
    additionalNotes: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Prescription = mongoose.model("Prescription", PrescriptionSchema);

export default Prescription;
