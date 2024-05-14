import { useGetMyUser } from "@/api/useGetMyUser";
import { useUpdateMyUser } from "@/api/useUpdateMyUser";
import UserProfileForm from "@/forms/user-profile-form/UserProfileForm";

function UserProfilePage() {
  const { currentUser, isLoading: isGetLoading } = useGetMyUser();
  const { updateUser, isLoading } = useUpdateMyUser();

  if (isGetLoading) {
    return <span>Loading...</span>;
  }

  if (!currentUser) {
    return <span>Unable to load user profile</span>;
  }

  return (
    <div>
      <UserProfileForm
        currentUser={currentUser}
        onSave={updateUser}
        isLoading={isLoading}
      />
    </div>
  );
}

export default UserProfilePage;
