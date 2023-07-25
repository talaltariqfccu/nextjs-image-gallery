import React from "react";
import { Spinner } from "@/components/bootstrap";

export default function loading() {
  return (
    <div className="d-block m-auto">
      <h1>Loading Please Wait...</h1>
      <Spinner animation="border" className="m-auto" />
    </div>
  );
}
