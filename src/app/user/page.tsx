import UserForm from "../components/UserForm";

export default function AddUser() {

  return (
    <div className="w-full flex flex-col justify-center items-center h-screen">
      <UserForm editMode={false} />
    </div>
  )
}
