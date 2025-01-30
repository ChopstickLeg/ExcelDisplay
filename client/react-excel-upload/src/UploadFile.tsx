import React, { useState } from 'react';
import axios from 'axios';

const UploadFile: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleFileUpload = async () => {
    if (!file) return alert("Please choose a file first.");

    setUploading(true);

    const formData = new FormData();
    formData.append('file', file);

    try {
      await axios.post('http://localhost:4000/upload', formData);
      window.location.href = '/display'; // Redirect to the display page
    } catch (error) {
      alert('Upload failed!');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <h1>Upload Excel File</h1>
      <input type="file" onChange={handleFileChange} accept=".xlsx, .xls" />
      <button onClick={handleFileUpload} disabled={uploading}>
        {uploading ? 'Uploading...' : 'Upload'}
      </button>
    </div>
  );
};

export default UploadFile;
