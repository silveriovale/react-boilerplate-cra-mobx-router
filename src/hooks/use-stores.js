import React from "react";
import { storesContext } from "../store/store-context";

export const useStores = () => React.useContext(storesContext);
