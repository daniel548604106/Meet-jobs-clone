import mongoose from 'mongoose';
const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'company',
    },
    salary: {
      type: String,
    },
  },
  {
    timestamps: true,
    id: false,
  },
);
//virtual populate

export default mongoose.models.Job || mongoose.model('Job', jobSchema);
