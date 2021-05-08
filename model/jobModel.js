const mongoose = require('mongoose');
const jobSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    company_name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    id: false,
  },
);
//virtual populate

export default mongoose.models.Job || mongoose.model('Job', jobSchema);
