import { redirect } from "next/navigation";
import React from "react";

const admin_page = () => {
  redirect("/admin/accounts");
};

export default admin_page;
