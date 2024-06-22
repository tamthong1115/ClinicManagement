import { useMutation, useQueryClient } from "react-query";
import { useAppContext } from "../../context/AppContext.jsx";
import LoadingComponent from "../Loading/Loading";
import { deleteReview } from "../../ApiClient/api-reviews.ts";

const DeleteReviewButton = ({ hotelId, reviewId }) => {
  const { showToast } = useAppContext();
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation(
    () => deleteReview(hotelId, reviewId),
    {
      onSuccess: () => {
        showToast({ message: "Review Deleted!", type: "SUCCESS" });
        queryClient.invalidateQueries("fetchReviews");
      },
      onError: () => {
        showToast({ message: "Error deleting review", type: "ERROR" });
      },
    }
  );

  const handleDelete = () => {
    mutate();
  };

  if (isLoading) return LoadingComponent({ isLoading });

  return (
    <button
      className=" flex h-[50px] w-[70px] items-center rounded bg-red-600  p-2 font-bold text-white hover:bg-red-500"
      onClick={handleDelete}
    >
      Delete
    </button>
  );
};

export default DeleteReviewButton;
