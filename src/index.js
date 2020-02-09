import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import "./index.css";
import Time from "./Time";

const FileIcon = ({ file }) => {
  let icon = "fa-file-text-o";
  if (file.type === "folder") {
    icon = "fa-folder";
  }

  return (
    <span className="file-icon">
      <i className={`fa ${icon}`} />
    </span>
  );
};

const FileListItem = ({ file }) => (
  <tr className="file-list-item">
    {/* <FileName file={file} /> */}
    <td>
      <FileIcon file={file} />
    </td>
    <td className="file-name">{file.name}</td>
    <td>
      <CommitMessage commit={file.latestCommit} />
    </td>
    <td className="age">
      <Time time={file.updated_at} />
    </td>
  </tr>
);

const CommitMessage = ({ commit }) => (
  <span className="commit-message">{commit.message} </span>
);

FileListItem.propTypes = {
  file: PropTypes.object.isRequired
};

const FileList = ({ files }) => (
  <table className="file-list">
    <tbody>
      {files.map(file => (
        <FileListItem key={file.id} file={file} />
      ))}
    </tbody>
  </table>
);

const FileName = ({ file }) => {
  return <></>;
};

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

FileListItem.propTypes = {
  file: PropTypes.object.isRequired
};

FileIcon.propTypes = {
  file: PropTypes.object.isRequired
};

FileName.propTypes = {
  file: PropTypes.object.isRequired
};

CommitMessage.propTypes = {
  commit: PropTypes.object.isRequired
};

ReactDOM.render(
  <FileList files={testFiles} />,
  document.getElementById("root")
);
