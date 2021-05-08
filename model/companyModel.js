import mongoose from 'mongoose';

const companySchema = new mongoose.Schema(
  {
    email: {
      type: String,
      require: true,
    },
    name: {
      type: String,
      required: true,
    },
    profile_img: {
      type: String,
    },
    link: {
      type: String,
    },
    num_of_personnel: {
      type: String,
    },
    location: {
      type: String,
    },
    slogan: {
      type: String,
    },
    info: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.models.Company || mongoose.model('Company', companySchema);
