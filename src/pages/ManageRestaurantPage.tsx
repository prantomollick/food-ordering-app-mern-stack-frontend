import { useCreateMyRestaurant } from "@/api/restaurant/useCreateMyRestaurant";
import ManageRestaurnatForm from "@/forms/manage-restaurant-form/ManageRestaurnatForm";

function ManageRestaurantPage() {
  const { createRestaurant, isLoading } = useCreateMyRestaurant();

  return (
    <ManageRestaurnatForm onSave={createRestaurant} isLoading={isLoading} />
  );
}

export default ManageRestaurantPage;
