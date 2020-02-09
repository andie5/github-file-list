import React from "react";
import Time from "./Time";
import FileIcon from "./FileIcon";
import CommitMessage from "./CommitMessage";
import PropTypes from "prop-types";

const FileListItem = ({ file }) => (
  <tr className="file-list-item">
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

FileListItem.propTypes = {
  file: PropTypes.object.isRequired
};

export default FileListItem;
