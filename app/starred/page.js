import Link from "next/link";
import React from "react";

function page() {
  return (
    <>
      <table style={{ height: "300px", width: "750px", marginTop: "5px" }}>
        <thead>
          <tr>
            <Link href={`/table/${1}`}>
              {" "}
              <td>New Play</td>
            </Link>
            <Link href={`/table/${2}`}>
              {" "}
              <td>Old Play </td>
            </Link>
            <Link href={`/table/${3}`}>
              <td>Recent Play</td>
            </Link>
            <Link href={`/table/${4}`}>
              {" "}
              <td>Next Play</td>{" "}
            </Link>
          </tr>
          {/* <td>Old Play </td>
          <td>Recent Play</td>
          <td>Next Play</td> */}
        </thead>
        <tdody></tdody>
      </table>
    </>
  );
}

export default page;
