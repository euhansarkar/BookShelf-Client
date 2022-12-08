import { async } from "@firebase/util";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const AllUsers = () => {
  const { data: users, isLoading, refetch } = useQuery({
    queryKey: [`users`],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/buyers`);
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <p>loading</p>;
  }

  const handleMakeAdmin = (id) => {
    fetch(`http://localhost:5000/users/admin/${id}`, {
      method: `PUT`,
      headers: {
        authorization: localStorage.getItem(`accessToken`),
      }
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.modifiedCount > 0){
            refetch();
            toast.success(`user added as an admin`)
        }
      });
  };

  return (
    <div>
      <h2 className="text-4xl text-center font-semibold my-6">
        this is all buyers page
      </h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Admin</th>
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
                  {user?.role !== `admin` && (
                    <button
                      onClick={() => handleMakeAdmin(user._id)}
                      className="btn btn-primary btn-xs btn-outline"
                    >
                      make admin
                    </button>
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
