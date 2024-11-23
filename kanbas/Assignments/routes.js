import * as dao from "./dao.js";

export default function AssignmentRoutes(app) {
  app.post("/api/assignments", (req, res) => {
    const newAssignment = dao.createAssignment(req.body);
    res.json(newAssignment);
  });

  app.get("/api/courses/:courseId/assignments", (req, res) => {
    const { courseId } = req.params;
    const assignments = dao.findAssignmentsForCourse(courseId);
    res.json(assignments);
  });

  app.put("/api/assignments/:assignmentId", (req, res) => {
    const { assignmentId } = req.params;
    const status = dao.updateAssignment(assignmentId, req.body);
    res.json(status);
  });

  app.delete("/api/assignments/:assignmentId", (req, res) => {
    const { assignmentId } = req.params;
    const status = dao.deleteAssignment(assignmentId);
    res.json(status);
  });
}
