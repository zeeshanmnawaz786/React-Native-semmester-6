import { employSchema } from "../models/employ.js";

const registeremploy = (req, res) => {
  const { employName, designation, department, contactNo } = req.body;

  const user = new employSchema({
    employName,
    designation,
    department,
    contactNo,
  });

  user
    .save()
    .then((savedEmploy) => {
      console.log("savedEmploy registered:", savedEmploy);
      res.json({
        message: "savedEmploy registered successfully",
        data: savedEmploy,
      });
    })
    .catch((error) => {
      console.error("Error registering user:", error);
      res.status(500).json({ message: "Failed to register savedEmploy" });
    });
};

const getemploy = async (req, res) => {
  try {
    const allComp = await employSchema.find({});

    res.json({
      allComp: allComp,
    });
  } catch (error) {
    console.error("Error finding allComp:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// // http://localhost:8000/api/updateBlog?_id=6547b6e02f3467ddc8364588
// const updateBlog = (req, res) => {
//   const blogId = req.params.id;
//   const { title, image, description, author, date, category } = req.body;

//   blogSchema.findOneAndUpdate(
//     blogId,
//     {
//       title,
//       image,
//       description,
//       author,
//       date,
//       category,
//     },
//     { new: true },
//     (error, updatedBlog) => {
//       if (error) {
//         console.error("Error updating blog:", error);
//         res.status(500).json({ message: "Failed to update blog" });
//       } else {
//         if (!updatedBlog) {
//           return res.status(404).json({ message: "Blog not found" });
//         }

//         console.log("Blog updated:", updatedBlog);
//         res.json({ message: "Blog updated successfully", data: updatedBlog });
//       }
//     }
//   );
// };

// http://localhost:8000/api/deleteComplain?_id=6547b6e02f3467ddc8364588
const deletemploy = (req, res) => {
  const Id = req.query._id;

  employSchema.findOneAndDelete({ _id: Id }, (error, deletedComp) => {
    if (error) {
      console.error("Error deleting employSchema:", error);
      res.status(500).json({ message: "Failed to delete employSchema" });
    } else {
      if (!deletedComp) {
        return res.status(404).json({ message: "employSchema not found" });
      }

      console.log("Blog deleted:", deletedComp);
      res.json({ message: "Blog deleted successfully", data: deletedComp });
    }
  });
};

export { registeremploy, getemploy, deletemploy };
