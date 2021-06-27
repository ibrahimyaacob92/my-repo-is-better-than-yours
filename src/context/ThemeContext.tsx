import React, { useContext, useState, useEffect } from "react";

const ThemeContext = React.createContext({});

export const useThemeContext = () => useContext(ThemeContext);
