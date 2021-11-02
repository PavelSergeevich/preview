import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import SbEditable from "storyblok-react";


const Table = ({ blok }) => {
  return (
    <SbEditable content={blok} key={blok._uid}>      
        <div className="table-responsive-lg" key={blok._uid}>
          <table className="table table-striped caption-top align-middle">
            <caption className="h3">{blok.title}</caption>
            <thead>
              <tr>
                {blok.body.thead.map((item, i) => (
                  <th scope="col" key={i} style={{textAlign: "center"}}>
                    <small>{item.value}</small>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {blok.body.tbody.map((item, i) => (
                <tr key={i}>
                  {item.body.map((item, i) => (
                    <td key={i} style={{textAlign: "center"}}>
                      <p>
                        <strong><small>{item.value.split(" ").slice(0, -2).join(" ")}</small></strong>
                      </p>
                      <small>
                        {item.value.split(" ").splice(-2)[0] +
                          " " +
                          item.value.split(" ").splice(-1)[0]}
                      </small>
                    </td>
                    ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>      
    </SbEditable>
  );
};

export default Table;
