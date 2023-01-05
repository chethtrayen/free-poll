import { Context } from "@type";

import { v4 as uuid4 } from "uuid";

export const Mutation = {
  checkAuth: (_: void, __: void, { res, uid }: Context): boolean => {
    if (!uid) {
      /**
       * If no user is logged in and no uId, create and inject a new uuid into the cookie
       */
      res.cookie("identifier", uuid4());
    }
    return true;
  },
};
