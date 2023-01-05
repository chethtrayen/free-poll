import { AuthContext, Context } from "@type";
import { Request, Response } from "express";

const contextData: AuthContext = {
  token: undefined,
  uid: undefined,
};

const context = async ({ req, res }: { req: Request; res: Response }): Promise<Context> => {
  if (req.headers.authorization) {
    /**
     * Set jwt token
     */
    contextData.token = req.headers.authorization.replace("Bearer ", "");
  } else if (req.cookies.identifier) {
    /**
     * Set identifier used for user access validation
     */
    contextData.uid = req.cookies.identifier;
  }

  return { ...contextData, req, res };
};

export default context;
