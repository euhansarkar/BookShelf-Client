import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Helmet } from "react-helmet";
import toast from "react-hot-toast";

const AllUsers = () => {
  const { data: users, isLoading, refetch } = useQuery({
    queryKey: [`users`],
    queryFn: async () => {
      const res = await fetch(`https://products-resale-server.vercel.app/users`);
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <p>loading</p>;
  }

  const handleMakeAdmin = (id) => {
    fetch(`https://products-resale-server.vercel.app/users/admin/${id}`, {
      method: `PUT`,
      headers: {
        authorization: `bearer ${localStorage.getItem(`accessToken`)}`,
      }
    })
      .then((res) => res.json())
      .then((data) => {
        ;
        if(data.modifiedCount > 0){
            refetch();
            toast.success(`user added as an admin`)
        }
      });
  };

  return (
    <div>
    <Helmet>
        <title>all users - BookShelf</title>
        <meta name="description" content="Nested component" />
      </Helmet>
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
