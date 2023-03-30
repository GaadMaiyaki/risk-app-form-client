import React from "react";

import Auth from "../components/auth/login";

import styles from "./index.module.scss";

import { parseClassName } from "./../utils";

import { withProtectionOnce } from "../components/hoc";

const HomePage = () => {
  return (
    <section
      className={parseClassName([
        "row justify-content-center py-4",
        styles.wrapper,
      ])}
    >
      <div className="col-12 col-lg-6 col-xl-6 col-xl-6 col-xxl-6">
        <Auth />
      </div>
    </section>
  );
};

export default withProtectionOnce(HomePage);

//const { v4: uuidv4 } = require("uuid");

//app.get("/api/endpoint", (req, res) => {
//  const deviceId = uuidv4();

//  res.json({ deviceId });
//});

//const crypto = require("crypto");

//function generateIdFromRequest(req) {
//  const userAgent = req.headers["user-agent"];
//  const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
//  const input = `${userAgent}${ip}`;

//  const hash = crypto.createHash("sha256");
//  hash.update(input);

//  return hash.digest("hex");
//}

//app.get("/api/get-id", (req, res) => {
//  const deviceId = generateIdFromRequest(req);

//  res.json({ deviceId });
//});
