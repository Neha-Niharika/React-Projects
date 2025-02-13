interface ProgressBarProps {
  progress: number;
}

function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div className="progress">
      <div
        className="progress-bar"
        role="progressbar"
        style={{ width: `${progress}%` }}
      >
        {progress}%
      </div>
    </div>
  );
}

export default ProgressBar;
