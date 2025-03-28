import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import customFetch from "../utils";
import { toast } from "react-toastify";

export const useFetchTask = () => {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const { data } = await customFetch.get("/");
      return data;
    },
  });

  return { isLoading, data, isError };
};

export const useCreateTask = () => {
    const queryClient = useQueryClient();

    const { mutate: createTask, isLoading } = useMutation({
        mutationFn: (taskTitle) => customFetch.post("/", { title: taskTitle }),
        onSuccess: () => {
          queryClient.invalidateQueries({queryKey:["tasks"]})
          toast.success('task added');
        },
        onError: (error) => {
          console.log(error.response.data.msg);
        },
      });
      return {createTask, isLoading}
};

export const useEditTask = () => {
  const queryClient = useQueryClient();

  const { mutate: editTask } = useMutation({
    mutationFn: ({ taskId, isDone }) => {
      return customFetch.patch(`/${taskId}`, { isDone });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });
  return { editTask };
};

export const useDleteTask = () => {
  const queryClient = useQueryClient();
  const { mutate: deleteTask, isLoading: deleteTaskLoading } = useMutation({
    mutationFn: (taskId) => {
      return customFetch.delete(`${taskId}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      toast.success(`Task Deleted`);
    },
  });
  return { deleteTask, deleteTaskLoading };
};
