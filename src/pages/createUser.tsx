import { useCreateUser } from "../hooks/useUser";

export const CreateUser = () => {
  const create_user = useCreateUser();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const data = Object.fromEntries(new FormData(form));

    await create_user.mutateAsync({ name: data.user as string });

    form.reset();
  };

  return (
    <div className="createUser">
      <h1>Create User</h1>
      <form onSubmit={handleSubmit}>
        <input name="user" type="text" placeholder="Add new user" />

        <div>
          <button>Add User</button>

          <div>
            {create_user.isLoading && <span>creating user...</span>}
            {create_user.isSuccess && <span>User created successfully</span>}
            {create_user.isError && <span>Ups! it was an error</span>}
          </div>
        </div>
      </form>
    </div>
  );
};
