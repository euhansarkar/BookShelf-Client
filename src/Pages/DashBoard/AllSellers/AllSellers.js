import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const AllUsers = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: [`users`],
    queryFn: async () => {
      const res = await fetch(`https://products-resale-server.vercel.app/sellers`);
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <p>loading</p>;
  }

  const handleIsApproved = (id) => {
    fetch(`https://products-resale-server.vercel.app/users/seller/${id}`, {
      method: `PUT`,
      headers: {
        authorization: `bearer ${localStorage.getItem(`accessToken`)}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          refetch();
          toast.success(`user approved!`);
        }
      });
  };

  return (
    <div>
      <h2 className="text-4xl text-center font-semibold my-6">
        this is all users page
      </h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Permission</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user?._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user?.isApproved !== true ? (
                    <button
                      onClick={() => handleIsApproved(user._id)}
                      className="btn btn-primary btn-xs btn-outline"
                    >
                      make approved
                    </button>
                  ) : (
                    <p className="text-green-400 ml-2">
                      <strong>approved</strong>
                    </p>
                  )}
                </td>
                <td>
                  <button className="btn btn-xs btn-primary btn-outline">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
