import React from "react";

import "./App.scss";

import useCustomRoutes from "./routes/index";

import axios from "axios";

function App() {
  const routes = useCustomRoutes();

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formData = new FormData();
    if (e.target.files && e.target.files[0]) {
      formData.append("file", e.target.files[0]);
      axios.post(
        "https://backstageapi.enterpriseinsight.app:8085/v1/deets/s3/upload?" +
          e.target.files[0].name,
        formData,
        {
          headers: {
            "Content-Type": e.target.files[0].type,
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6IjZkMzlkOTk3LWE1YmMtNGY4Ny04YmYzLTlhMDQ3MWY3NWFiOSIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiZGVldHNfcHJvZmlsZV9vd25lciIsImVtYWlsIjoibmR1a3dlLmthbEBnbWFpbC5jb20iLCJleHAiOjE2Nzk1MzAwNjZ9.bmn7ML-Rrwal4jDe2B7CSiW7-sVnQ253GulJPJwFtps",
          },
        }
      );
    }
  };

  return (
    <section className="app">
      <div>
        <input type="file" name="file" onChange={handleFileUpload} />
      </div>

      {routes}
    </section>
  );
}

export default App;
