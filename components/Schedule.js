import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import SbEditable from "storyblok-react";
import { Table } from "react-bootstrap";


const Schedule = ({ blok }) => {
  return (
    <SbEditable content={blok}>
      <div className="table-responsive" key={blok._uid}>
        <table className="table table-bordered table-striped table-hover caption-top align-middle">
          <caption className="h3">{blok.title}</caption>
          <thead>
            <tr>
              {blok.table_dances.thead.map((item, i) => (
                <th scope="col" key={i} style={{ textAlign: "center" }}>
                  <small>{item.value}</small>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {blok.table_dances.tbody.map((item, i) => (
              <tr key={i}>
                {item.body.map((item, i) => {
                  item.value = item.value.trim();
                  return (
                    <td key={i} style={{ textAlign: "center" }}>
                      {((item.value.charAt(0) == "0")
                        || (item.value.charAt(0) == "1")
                        || (item.value.charAt(0) == "2")
                        || (item.value.charAt(0) == "/")
                        || (item.value.charAt(0) == "-")
                      ) ? (
                        <span className="time">{item.value}</span>
                      ) : (
                        <>
                          <p>
                            <span className="dance">
                              {item.value.split(" ").slice(0, -2).join(" ")}
                            </span>
                          </p>
                          <span className="trainer">
                            {item.value.split(" ").splice(-2)[0] +
                              " " +
                              item.value.split(" ").splice(-1)[0]}
                          </span>
                        </>
                      )}
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SbEditable>
  );
};

export default Schedule;
