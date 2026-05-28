"use client";

import { useEffect, useState } from "react";

export default function UserList({ endpoint = "/api/users" }) {
  const [status, setStatus] = useState("loading");
  const [users, setUsers] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    let isMounted = true;

    async function fetchUsers() {
      setStatus("loading");

      try {
        const response = await fetch(endpoint);

        if (!response.ok) {
          throw new Error("Request failed");
        }

        const data = await response.json();

        if (isMounted) {
          setUsers(data);
          setStatus("success");
        }
      } catch (error) {
        if (isMounted) {
          setErrorMessage("Unable to load users.");
          setStatus("error");
        }
      }
    }

    fetchUsers();

    return () => {
      // Prevent state updates after unmount in async flows.
      isMounted = false;
    };
  }, [endpoint]);

  if (status === "loading") {
    return <p className="text-sm text-zinc-500">Loading users...</p>;
  }

  if (status === "error") {
    return <p className="text-sm text-red-600">{errorMessage}</p>;
  }

  return (
    <ul className="space-y-2">
      {users.map((user) => (
        <li
          key={user.id}
          className="rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-800"
        >
          <span className="font-medium">{user.name}</span>
          {user.role ? (
            <span className="ml-2 text-xs text-zinc-500">({user.role})</span>
          ) : null}
        </li>
      ))}
    </ul>
  );
}
