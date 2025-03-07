import { useEffect } from "react";
import NProgress from "nprogress"
import "nprogress/nprogress.css";

NProgress.configure({ showSpinner: false });

interface LoadingBarProps {
  isLoading: boolean;
}

const LoadingBar: React.FC<LoadingBarProps> = ({ isLoading }) => {
  useEffect(() => {
    if (isLoading) {
      NProgress.start();
    } else {
      NProgress.done();
    }
  }, [isLoading]);

  return null;
};

export default LoadingBar;
