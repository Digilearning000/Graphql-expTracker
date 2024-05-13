import { mergeTypeDefs } from "@graphql-tools/merge";

import userTypedef from "./user.typeDef.js";

import transactionTypeDef from "./transaction.typeDef.js";

const mergedTypeDefs = mergeTypeDefs([userTypedef, transactionTypeDef]);

export default mergedTypeDefs;
