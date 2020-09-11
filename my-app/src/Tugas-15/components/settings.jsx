import React, { useContext } from "react";

import { ThemeContext } from "../contexts/theme";

const Settings = () => {
  const { isLightTheme, onChange } = useContext(ThemeContext);
  const handleChange = (e) => onChange(e.currentTarget.value);
  const handleSubmit = (e) => e.preventDefault();

  return (
    <div className="settings">
      <h1>Settings</h1>
      <form className="settings-form" onSubmit={handleSubmit}>
        <div style={{ display: "flex" }}>
          <p style={{ width: "10%", margin: "auto" }}>
            <b>Theme</b>
          </p>
          <div
            style={{
              margin: "auto"
            }}
          >
            <p>
              <label>
                <input
                  type="radio"
                  name="isLightTheme"
                  className="with-gap"
                  value={1}
                  checked={isLightTheme}
                  onChange={handleChange}
                />
                <span>Terang</span>
              </label>
            </p>
            <p>
              <label>
                <input
                  type="radio"
                  name="isLightTheme"
                  className="with-gap"
                  value={0}
                  checked={!isLightTheme}
                  onChange={handleChange}
                />
                <span>Gelap</span>
              </label>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Settings;
