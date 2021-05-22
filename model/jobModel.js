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
    description: {
      type: String,
    },
    location: {
      type: String,
    },
    job_type: {
      type: String,
    },
    skills_requirement: [
      {
        type: String,
      },
    ],
    job_function: {
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
