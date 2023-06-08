import { toast, ToastPosition, Theme} from "react-toastify";

export const toastNotify = (
  text: string, 
  position?: ToastPosition,
  autoClose?: number,
  closeOnClick?: boolean,
  pauseOnHover?: boolean,
  theme?: Theme,
  hideProgressBar?: boolean,
  ) => {
  toast(text, {
    position: position,
    autoClose: autoClose,
    closeOnClick: closeOnClick,
    pauseOnHover: pauseOnHover,
    theme: theme,
    hideProgressBar: hideProgressBar
  });
}