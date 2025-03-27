import React, { useState, useRef, useEffect, ChangeEvent, DragEvent } from 'react';
import './test.css'; // We'll define this styling separately

// TypeScript interfaces
interface FileWithPreview extends File {
  preview?: string;
  id: string;
}

interface ProgressState {
  [key: string]: number;
}

interface CaptionState {
  [key: string]: string;
}

interface FileTypeInfo {
  label: string;
  color: string;
  icon: string;
}

// Main component
const MediaUploader: React.FC = () => {
  // State management with TypeScript types
  const [files, setFiles] = useState<FileWithPreview[]>([]);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [uploading, setUploading] = useState<boolean>(false);
  const [progress, setProgress] = useState<ProgressState>({});
  const [captions, setCaptions] = useState<CaptionState>({});
  const [showEmojiPicker, setShowEmojiPicker] = useState<boolean>(false);
  const [activeFileId, setActiveFileId] = useState<string | null>(null);
  
  // Refs
  const fileInputRef = useRef<HTMLInputElement>(null);
  const dropAreaRef = useRef<HTMLDivElement>(null);
  
  // Handle drag events with proper TypeScript event types
  useEffect(() => {
    const handleDragOver = (e: DragEvent<HTMLDivElement> | any) => {
      e.preventDefault();
      e.stopPropagation();
      if (!isDragging) setIsDragging(true);
    };
    
    const handleDragLeave = (e: DragEvent<HTMLDivElement> | any) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);
    };
    
    const handleDrop = (e: DragEvent<HTMLDivElement> | any) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);
      
      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        handleFiles(e.dataTransfer.files);
      }
    };
    
    const dropArea = dropAreaRef.current;
    if (dropArea) {
      dropArea.addEventListener('dragover', handleDragOver as any);
      dropArea.addEventListener('dragleave', handleDragLeave as any);
      dropArea.addEventListener('drop', handleDrop as any);
      
      return () => {
        dropArea.removeEventListener('dragover', handleDragOver as any);
        dropArea.removeEventListener('dragleave', handleDragLeave as any);
        dropArea.removeEventListener('drop', handleDrop as any);
      };
    }
  }, [isDragging]);
  
  // Select files via button click
  const handleSelectFiles = (): void => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  
  // Handle file input change
  const handleFileInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.files && e.target.files.length > 0) {
      handleFiles(e.target.files);
    }
  };
  
  // Process selected files
  const handleFiles = (fileList: FileList): void => {
    const newFiles: FileWithPreview[] = Array.from(fileList).map(file => {
      // Create a unique ID for each file
      const fileWithId = file as FileWithPreview;
      fileWithId.id = `file-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
      
      // Add preview for images
      if (isImage(file.name)) {
        fileWithId.preview = URL.createObjectURL(file);
      }
      
      return fileWithId;
    });
    
    setFiles(prevFiles => [...prevFiles, ...newFiles]);
    
    // Initialize progress and captions
    newFiles.forEach(file => {
      setProgress(prev => ({
        ...prev,
        [file.id]: 0
      }));
      setCaptions(prev => ({
        ...prev,
        [file.id]: ''
      }));
    });
  };
  
  // Remove a file
  const removeFile = (fileId: string): void => {
    // Revoke object URL for any image previews to prevent memory leaks
    const fileToRemove = files.find(file => file.id === fileId);
    if (fileToRemove?.preview) {
      URL.revokeObjectURL(fileToRemove.preview);
    }
    
    setFiles(prev => prev.filter(file => file.id !== fileId));
    
    // Clean up progress and captions
    setProgress(prev => {
      const newProgress = {...prev};
      delete newProgress[fileId];
      return newProgress;
    });
    
    setCaptions(prev => {
      const newCaptions = {...prev};
      delete newCaptions[fileId];
      return newCaptions;
    });
  };
  
  // Handle caption changes
  const handleCaptionChange = (fileId: string, value: string): void => {
    setCaptions(prev => ({
      ...prev,
      [fileId]: value
    }));
  };
  
  // Handle the upload process
  const handleUpload = (): void => {
    if (files.length === 0) return;
    
    setUploading(true);
    
    // Simulate upload progress
    const simulateUpload = (): void => {
      files.forEach(file => {
        let currentProgress = 0;
        
        const interval = setInterval(() => {
          currentProgress += Math.random() * 15;
          
          if (currentProgress >= 100) {
            currentProgress = 100;
            clearInterval(interval);
            
            // Check if all uploads are complete
            const allComplete = Object.values(progress).every(p => p === 100);
            if (allComplete) {
              setTimeout(() => {
                setUploading(false);
                
                // Clean up object URLs
                files.forEach(file => {
                  if (file.preview) {
                    URL.revokeObjectURL(file.preview);
                  }
                });
                
                setFiles([]);
                setProgress({});
                setCaptions({});
                
                // Show success notification logic would go here
              }, 500);
            }
          }
          
          setProgress(prev => ({
            ...prev,
            [file.id]: currentProgress
          }));
        }, 300 + Math.random() * 500);
      });
    };
    
    simulateUpload();
  };
  
  // Toggle emoji picker
  const toggleEmojiPicker = (fileId: string | null): void => {
    setActiveFileId(fileId);
    setShowEmojiPicker(prev => !prev);
  };
  
  // Add emoji to caption
  const addEmoji = (emoji: string): void => {
    if (activeFileId) {
      setCaptions(prev => ({
        ...prev,
        [activeFileId]: (prev[activeFileId] || '') + emoji
      }));
    }
  };
  
  // Get file type information
  const getFileTypeInfo = (fileName: string): FileTypeInfo | null => {
    const extension = fileName.split('.').pop()?.toLowerCase() || '';
    
    // Check if it's an image file
    if (['jpg', 'jpeg', 'png', 'gif', 'webp'].includes(extension)) {
      return null; // We'll show the image preview instead
    }
    
    // Define file type information for different file types
    const fileTypes: {[key: string]: FileTypeInfo} = {
      video: {
        label: 'VID',
        color: '#f97316', // Orange
        icon: '🎬'
      },
      audio: {
        label: 'AUD',
        color: '#8b5cf6', // Purple
        icon: '🎵'
      },
      document: {
        label: 'DOC',
        color: '#3b82f6', // Blue
        icon: '📄'
      },
      archive: {
        label: 'ZIP',
        color: '#eab308', // Yellow
        icon: '🗃️'
      },
      code: {
        label: 'CODE',
        color: '#10b981', // Green
        icon: '📝'
      }
    };
    
    // Map extensions to file type categories
    if (['mp4', 'webm', 'mov', 'avi'].includes(extension)) {
      return fileTypes.video;
    } else if (['mp3', 'wav', 'ogg', 'm4a'].includes(extension)) {
      return fileTypes.audio;
    } else if (['pdf', 'doc', 'docx', 'txt', 'rtf'].includes(extension)) {
      return fileTypes.document;
    } else if (['zip', 'rar', '7z', 'tar', 'gz'].includes(extension)) {
      return fileTypes.archive;
    } else if (['js', 'ts', 'html', 'css', 'json', 'py', 'java'].includes(extension)) {
      return fileTypes.code;
    }
    
    // Default for unknown file types
    return {
      label: 'FILE',
      color: '#64748b', // Slate
      icon: '📎'
    };
  };
  
  // Check if a file is an image
  const isImage = (fileName: string): boolean => {
    const extension = fileName.split('.').pop()?.toLowerCase() || '';
    return ['jpg', 'jpeg', 'png', 'gif', 'webp'].includes(extension);
  };
  
  // Format file size
  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return bytes + ' B';
    else if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
    else return (bytes / 1048576).toFixed(2) + ' MB';
  };
  
  // Render emoji picker
  const renderEmojiPicker = (): JSX.Element | null => {
    if (!showEmojiPicker) return null;
    
    const commonEmojis = ['😊', '😂', '❤️', '👍', '🔥', '✨', '🎉', '🙌', '🤔', '👀'];
    
    return (
      <div className="emoji-picker">
        <div className="emoji-picker-header">
          <h4>Quick Emojis</h4>
          <button onClick={() => setShowEmojiPicker(false)} className="close-emoji-picker">
            ✕
          </button>
        </div>
        <div className="emoji-grid">
          {commonEmojis.map((emoji, index) => (
            <button 
              key={index} 
              onClick={() => addEmoji(emoji)} 
              className="emoji-btn"
            >
              {emoji}
            </button>
          ))}
        </div>
      </div>
    );
  };
  
  return (
    <div className="media-uploader">
      <div className="uploader-header">
        <h2>Upload Media</h2>
        <p className="uploader-subtitle">Share images, videos, and more</p>
      </div>
      
      <div 
        ref={dropAreaRef}
        className={`upload-area ${isDragging ? 'drag-active' : ''} ${files.length > 0 ? 'has-files' : ''}`}
      >
        <div className="upload-content">
          <div className="upload-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 8V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 12H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          
          <div className="upload-text">
            <p className="primary-text">
              {isDragging ? 'Drop files to upload' : 'Drag and drop files here'}
            </p>
            <p className="secondary-text">or</p>
          </div>
          
          <button 
            className="select-btn"
            onClick={handleSelectFiles}
            disabled={uploading}
          >
            Browse Files
          </button>
          
          <input 
            ref={fileInputRef}
            type="file" 
            multiple
            className="file-input"
            onChange={handleFileInputChange}
            disabled={uploading}
            accept="image/*,video/*,audio/*,.pdf,.doc,.docx,.zip,.rar"
          />
        </div>
      </div>
      
      {files.length > 0 && (
        <div className="selected-files">
          <div className="files-header">
            <h3>Selected Files ({files.length})</h3>
            {!uploading && (
              <button 
                className="clear-all-btn"
                onClick={() => {
                  // Revoke all object URLs
                  files.forEach(file => {
                    if (file.preview) URL.revokeObjectURL(file.preview);
                  });
                  setFiles([]);
                  setProgress({});
                  setCaptions({});
                }}
              >
                Clear All
              </button>
            )}
          </div>
          
          <div className="files-grid">
            {files.map((file) => {
              const fileType = getFileTypeInfo(file.name);
              const progressValue = progress[file.id] || 0;
              
              return (
                <div key={file.id} className="preview-item">
                  <div className="preview-header">
                    <span className="file-name" title={file.name}>
                      {file.name.length > 20 ? file.name.substring(0, 20) + '...' : file.name}
                    </span>
                    <span className="file-size">{formatFileSize(file.size)}</span>
                  </div>
                  
                  <div className="preview-content">
                    {isImage(file.name) && file.preview ? (
                      <img 
                        src={file.preview} 
                        alt={file.name}
                        className="preview-img"
                      />
                    ) : (
                      <div className="file-type-display" style={{ backgroundColor: fileType?.color || '#64748b' }}>
                        <span className="file-type-icon">{fileType?.icon || '📎'}</span>
                        <span className="file-type-label">{fileType?.label || 'FILE'}</span>
                      </div>
                    )}
                    
                    {!uploading && (
                      <button 
                        className="remove-file-btn"
                        onClick={() => removeFile(file.id)}
                        aria-label="Remove file"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    )}
                  </div>
                  
                  <div className="caption-section">
                    <div className="caption-input-container">
                      <input 
                        type="text"
                        placeholder="Add a caption..."
                        className="caption-input"
                        value={captions[file.id] || ''}
                        onChange={(e) => handleCaptionChange(file.id, e.target.value)}
                        disabled={uploading}
                      />
                      <button 
                        className="emoji-toggle"
                        onClick={() => toggleEmojiPicker(file.id)}
                        disabled={uploading}
                      >
                        😊
                      </button>
                    </div>
                  </div>
                  
                  {uploading && (
                    <div className="upload-progress">
                      <div className="progress-track">
                        <div 
                          className="progress-fill"
                          style={{ width: `${progressValue}%` }}
                        ></div>
                      </div>
                      <span className="progress-text">{Math.round(progressValue)}%</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          
          {renderEmojiPicker()}
          
          <div className="upload-actions">
            <button 
              className="cancel-btn"
              onClick={() => {
                if (uploading) {
                  // In a real app, you would cancel the actual upload request here
                  setUploading(false);
                } else {
                  // Revoke all object URLs
                  files.forEach(file => {
                    if (file.preview) URL.revokeObjectURL(file.preview);
                  });
                  setFiles([]);
                  setProgress({});
                  setCaptions({});
                }
              }}
            >
              {uploading ? 'Cancel' : 'Clear'}
            </button>
            
            <button 
              className="upload-btn"
              onClick={handleUpload}
              disabled={uploading || files.length === 0}
            >
              {uploading ? (
                <span className="uploading-text">
                  <span className="spinner"></span>
                  Uploading...
                </span>
              ) : 'Upload Files'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MediaUploader;