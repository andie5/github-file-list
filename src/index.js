import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";

const FileList = ({ files }) => (
  <table className="file-list">
    <tbody>
      {files.map(file => (
        <tr className="file-list-item" key={file.id}>
          {file.id}
          <td className="file-name">{file.name}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

const testFiles = [
  {
    id: 1,
    name: "src",
    type: "folder",
    updated_at: "2016-07-11 21:24:00",
    latestCommit: {
      message: "Initial commit"
    }
  },
  {
    id: 2,
    name: "tests",
    type: "folder",
    updated_at: "2016-07-11 21:24:00",
    latestCommit: {
      message: "Initial commit"
    }
  },
  {
    id: 3,
    name: "README",
    type: "file",
    updated_at: "2016-07-18 21:24:00",
    latestCommit: {
      message: "Added a readme"
    }
  }
];

FileList.propTypes = {
  files: PropTypes.array
};

ReactDOM.render(
  <FileList files={testFiles} />,
  document.getElementById("root")
);
