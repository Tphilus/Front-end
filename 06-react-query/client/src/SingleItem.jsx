import { useMutation, useQueryClient } from "@tanstack/react-query";
import customFetch from "../utils";
import { toast } from "react-toastify";
import { useDleteTask, useEditTask } from "./reactQuearyCustomHooks";

const SingleItem = ({ item }) => {
  const queryClient = useQueryClient();
  // const { mutate: editTask } = useMutation({
  //   mutationFn: ({ taskId, isDone }) => {
  //     return customFetch.patch(`/${taskId}`, { isDone });
  //   },
  //   onSuccess: () => {
  //     queryClient.invalidateQueries({ queryKey: ["tasks"] }); 
  //   },
  // });


  // const {mutate: deleteTask, isLoading} = useMutation({
  //   mutationFn: (taskId) => {
  //     return customFetch.delete(`${taskId}`)
  //   },
  //   onSuccess: () => {
  //     queryClient.invalidateQueries({ queryKey: ["tasks"] });
  //     toast.success(`Task Deleted`)
  //   },
  // })

 const {editTask} = useEditTask();
 const {deleteTask, deleteTaskLoading} = useDleteTask();

  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={item.isDone}
        onChange={() => editTask({ taskId: item.id, isDone: !item.isDone })}
      />
      <p
        style={{
          textTransform: "capitalize",
          textDecoration: item.isDone && "line-through",
        }}
      >
        {item.title}
      </p>
      <button
        className="btn remove-btn"
        type="button"
        disabled={deleteTaskLoading}
        onClick={() => deleteTask(item.id)}
      >
        delete
      </button>
    </div>
  );
};
export default SingleItem;
