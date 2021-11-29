import { NextApiRequest, NextApiResponse } from "next";

export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    { id: 1, nome: "Pedro" },
    { id: 2, nome: "Elen" },
    { id: 3, nome: "Pedro Filho" },
  ];

  return response.json(users);
};
