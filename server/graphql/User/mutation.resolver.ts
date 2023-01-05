import { Context } from "@type";

import { v4 as uuid4 } from "uuid";

export const Mutation = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  checkAuth: (_: unknown, __: unknown, { res, uid }: Context): boolean => {
    if (!uid) {
      /**
       * If no user is logged in and no uId, create and inject a new uuid into the cookie
       */
      res.cookie("identifier", uuid4());
    }
    return true;
  },
};
