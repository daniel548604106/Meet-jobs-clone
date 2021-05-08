import dbConnect from '../../../utils/mongodb';
import Job from '../../../model/jobModel';
export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        const jobs = await Job.find({}); /* find all the data in our database */
        res.status(200).json({ success: true, jobs });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'POST':
      try {
        const newJob = await Job.create(req.body); /* create a new model in the database */
        res.status(201).json({ success: true, newJob });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
