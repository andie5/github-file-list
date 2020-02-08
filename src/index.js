import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import "./index.css";

const FileIcon = ({ file }) => {
  let icon = "fa-file-text-o";
  if (file.type === "folder") {
    icon = "fa-folder";
  }

  return (
    <td className="file-icon">
      <i className={`fa-${icon}`} />
    </td>
  );
};

const FileListItem = ({ file }) => (
  <tr className="file-list-item">
    <FileName file={file} />
    <CommitMessage commit={file.latestCommit} />
  </tr>
);

const CommitMessage = ({ commit }) => {
  <td className="commit-message">{commit.message}</td>;
};

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
  return (
    <>
      <FileIcon file={file} />
      <td className="file-name">{file.name}</td>
    </>
  );
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
