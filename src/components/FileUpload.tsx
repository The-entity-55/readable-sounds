import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload } from 'lucide-react';
import { toast } from 'sonner';

const FileUpload = () => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file && file.type === 'application/pdf') {
      toast.success('PDF uploaded successfully');
      // TODO: Handle PDF processing with Gemini API
      console.log('Processing PDF:', file.name);
    } else {
      toast.error('Please upload a PDF file');
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
    },
    maxFiles: 1,
  });

  return (
    <div
      {...getRootProps()}
      className="border-2 border-dashed border-secondary/50 rounded-lg p-12 text-center cursor-pointer transition-colors hover:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 bg-black/30"
      role="button"
      tabIndex={0}
      aria-label="Upload PDF file"
    >
      <input {...getInputProps()} aria-label="PDF file input" />
      <Upload className="mx-auto h-12 w-12 text-secondary/50" />
      <h3 className="mt-4 text-lg font-medium text-secondary">
        {isDragActive ? "Drop your PDF here" : "Upload PDF"}
      </h3>
      <p className="mt-2 text-sm text-gray-400">
        Drag and drop your PDF file here, or click to select
      </p>
      <p className="mt-1 text-xs text-gray-500">PDF files only, up to 50MB</p>
    </div>
  );
};

export default FileUpload;