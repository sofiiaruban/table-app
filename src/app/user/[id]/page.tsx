import UserForm from "@/app/components/UserForm";

export default function EditUser() {
  return (
    <div className="w-full flex flex-col justify-center items-center h-screen">
      <UserForm editMode={true} />
    </div>
  )
}
